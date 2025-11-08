const e = require('express');
const prisma = require('../config/prisma');
const { calTotal } = require('../utils/booking');
const renderError = require('../utils/renderError');
// Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

//1️⃣GET
exports.listBookings = async(req,res,next)=>{
    try {
        // code
        const { id } = req.user;   // clerkId
        const bookings = await prisma.booking.findMany({
            where:{
                profileId:id,
                paymentStatus:true,
            },
            include:{
                landmark:{
                    select:{
                        id:true,
                        title:true,
                    }
                }
            },orderBy:[
                {checkIn:'desc'},
                {checkOut:'desc'}
            ]
        })
        console.log(bookings)
        console.log(id)
        res.json({ message :'List your order',result:bookings}) // result:bookings - ส่งไป Front เก็บแบบ State
    } catch (error) {
        next(error);
    }

}

// 2️⃣POST
exports.createBooking = async (req,res,next)=>{
    try {

    // 1. Destructuring req.body
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user; 
        // console.log(req.body)

    // 2. Delete Booking ( payment )
    await prisma.booking.deleteMany({
        where:{
            profileId:id,
            paymentStatus:false,
        }
    }); 

    // 3. Find Camping
    const camping = await prisma.landmark.findFirst({
        where: { id: Number(campingId) },
       select: { price: true, id: true },
    });
    if (!campingId) {
        return renderError(res,400,"campingId, checkIn, checkOut are required")
    }

    // 4 Calculator Total
    const { totalNights,totalPrices } = calTotal( checkIn,checkOut,camping.price)
    //  console.log('result: ',totalNights,totalPrices);

    // 5 Insert to db
    const booking = await prisma.booking.create({
       data: {
        profileId: id,                   
        landmarkId: campingId,             
        checkIn: checkIn,
        checkOut: checkOut,
        total: totalPrices,          // ชื่อฟิลด์ใน schema = total
        totalNights: totalNights,
       }
    });
    console.log(booking);

    // 6 Send id booking to react
    const bookingId = booking.id;

        res.json({  message: "Booking created successfully!", result: bookingId});
    } catch (error) {
        next(error);
    }
}
//2️⃣POST
exports.checkout = async(req,res,next)=>{
    try {
        const { id } = req.body;
        // 1 find data booking
        const booking = await prisma.booking.findFirst({
            where:{ id:Number(id)},
            // join SQL  (include)
             include:{
                landmark:{
                    select:{
                        id:true,
                        secure_url:true,
                        title:true,
                    }
                }
             }
        })
        // not booking
        if (!booking) {
            return renderError(res, 404 ,'Not Found Camping !!!')
        }
        const { total,totalNights,checkOut,checkIn,landmark }= booking;
        const { title,secure_url } = landmark;
        //  console.log('DATA: ',total,totalNights,checkOut,checkIn,title,secure_url )

        // 2 Stripe ( Copies ,https://docs.stripe.com/checkout/embedded/quickstart?client=react)
         const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            metadata:{ bookingId:booking.id }, // metadata = คำอธิบาย(ฉลากยา)
            line_items: [
            {
                // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                quantity: 1,
                price_data:{
                    currency:'THB',
                    product_data:{
                        name:title,
                        images:[secure_url],
                        description:'Thank you more'
                    },
                    unit_amount:total * 100
                }
            },
            ],
            mode: 'payment',
            
            return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`, // send to front after send payment success
            //  return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
        });
        res.send({ clientSecret:session.client_secret });
    } catch (error) {
        next(error)
    }
}

// 1️⃣GET
exports.checkOutStatus = async(req,res,next)=>{
    try {   
        //code
        const { session_id }=req.params; //params = url
          const session = await stripe.checkout.sessions.retrieve(session_id); //นทาง checkout no.62
          const bookingId = session.metadata?.bookingId //metadata มาจากต้นทาง checkout no.62
        //check
        if (session.status !== "complete" || !bookingId ) {
            return renderError(400,'Something Wrong!!')
        }
        // Update to DB paymentStatus => true (เพราะตอนนี้ใน DB เป็น false = 0)
        const result = await prisma.booking.update({
            where:{
                id:Number(bookingId),
            },
            data:{
                paymentStatus: true,  // paymentStatus = true = 1(แปลว่าจ่ายแล้ว)
            }
        })
        res.json({ message:"Payment Complete",status:session.status})
        console.log(bookingId);
    } catch (error) {
        console.log(error)
    }
}

//3️⃣PUT  
//4️⃣PATCH
//5️⃣DELETE