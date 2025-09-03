// Middleware
exports.authCheck=(req,res,next)=>{
    try {
        console.log('Hello, Middleware')

        if(true){
         next();
        }else{
         //Not pass
         res.status(401).json({message:'Unauthorized'});
         console.log('Unauthorized');
        }
        
     //next pass 
     console.log('authorized');
    } catch (error) {
        //error
       console.log(error);
    }
};

