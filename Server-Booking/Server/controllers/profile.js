// 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

const renderError = require("../utils/renderError");
const prisma = require('../config/prisma')

// 1️⃣GET
exports.createProfile= async(req,res,next)=>{
    try {

        //code body
        const { firstname, lastname} = req.body
        const {id} = req.user;
        const email = req.user.emailAddresses[0].emailAddress
        //create profile
        // const profile = await prisma.profile.create({
        //     data:{
        //         firstname:firstname,
        //         lastname:lastname,
        //         clerkId:id,
        //         email:email,
        //     }
        // })
        const profile = await prisma.profile.upsert({
            where:{ clerkId:id },
            //ถ้าไม่มี ก็สร้างให้
            create:{ 
                firstname:firstname,
                lastname:lastname,
                clerkId:id,
                email:email,
            },
            //ถ้ามีก็ Update ให้
            update:{
                firstname:firstname,
                lastname:lastname,
                email:email,
            }
        })

        res.json({result:profile, message:'Created Profile'});
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}
//2️⃣POST
//3️⃣PUT
//4️⃣PATCH
//5️⃣DELETE