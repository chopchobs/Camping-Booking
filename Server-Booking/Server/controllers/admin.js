const prisma = require('../config/prisma');
const { calTotal } = require('../utils/booking');
const renderError = require('../utils/renderError');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

exports.listStats = async(req,res,next)=>{
    try {
        //code body
        const usersCount = await prisma.profile.count();
        const campingCount = await prisma.landmark.count();
        const bookingCount = await prisma.booking.count();
        // console.log('Camping',Camping)
        // console.log('Booking',Booking)
        res.json({
           usersCount :usersCount,
           campingCount:campingCount,
           bookingCount:bookingCount,
        });
    } catch (error) {
        next(error)
    }
}

exports.listReservations = async(req,res,next)=>{
    const { id } = req.user;
    console.log(req.user);
    try {
        //code body
        // 1. count Camping
        const campings = await prisma.landmark.count({
          where:{
            profileId: id,
          }
        });
        // 2. count,  [ 3. nights , total - aggregate ] 
        const totals = await prisma.booking.aggregate({
            where:{
                landmark:{
                    profileId:id,
                }
            },
            _sum:{
                totalNights:true,
                total:true,
            }
        });
        res.json({ 
            campings:campings,
            nights:totals._sum.totalNights,
            totals:totals._sum.total,
        });
    } catch (error) {
        next(error)
    }
}

exports.listAllReservations = async(req,res,next)=>{
    try {
        //code body
        const { id } = req.user;
        const reservations = await prisma.booking.findMany({
            //1.only paid bookings
            //2.include landmark data
            where:{
                paymentStatus:true,
                landmark:{
                    profileId:id,
                }
                // 3.include landmark data
            },include:{
                landmark:{
                    select:{
                        id:true,
                        title:true,
                        price:true,
                    },
                },
                //rank createdAt desc from newest to oldest
            },orderBy:{
                createdAt:'desc',
            }
        })
        console.log(reservations);
        res.json({ result:reservations });
    } catch (error) {
        next(error)
    }
}

exports.listMyCampings = async(req,res,next)=>{
    try {
        //code body
        const { id } = req.user;
        const myCampings = await prisma.landmark.findMany({
            where:{profileId:id},
            select:{
                id:true,
                title:true,
                price:true,
            }
        })
        console.log(myCampings);
        res.json({result:myCampings });
    } catch (error) {
       next(error) 
    }
}