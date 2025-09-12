// Middleware
const renderError = require('../utils/renderError');
const { clerkClient } = require ('@clerk/express')

exports.authCheck= async(req,res,next)=>{
    try {
     const auth = req.auth();         
     const userId = auth?.userId;
    if (!userId) {
        return renderError(401,"Unauthorize!!!")
    }
     const user = await clerkClient.users.getUser(userId)
     req.user = user //controller จะใช้งานเข้าถึง user , ใช้ req.user ได้เลย
     next()
    } catch (error) {
     next(error); 
    }
};

