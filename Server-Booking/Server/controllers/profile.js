const prisma = require('../config/prisma')

exports.createProfile = async (req, res, next) => {
    try {
        //code body
        const { firstname, lastname } = req.body
        const { id } = req.user;
        const email = req.user.emailAddresses[0].emailAddress
        const profile = await prisma.profile.upsert({
            where:{ clerkId:id },
            create:{   // ไม่มี create
                firstname:firstname,
                lastname:lastname,
                clerkId:id,
                email:email,
            },
            update:{ // มี update
                firstname:firstname,
                lastname:lastname,
                email:email,
            },
        })
        res.json({ result: profile, message: 'Created Profile' });
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}
