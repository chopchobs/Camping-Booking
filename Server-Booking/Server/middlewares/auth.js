// Middleware
const renderError = require('../utils/renderError');
const { clerkClient } = require ('@clerk/express')

exports.authCheckUser= async ( req, res , next )=>{
    try {
    // code body
    const auth = req.auth();             
    const { userId } = auth || {};
    if (!userId) {
        return renderError( 401 , "Unauthorized!!!" )
    }
     const user = await clerkClient.users.getUser( userId )
     req.user = user 
     next()
    } catch (error) {
     next(error); 
    }
};

