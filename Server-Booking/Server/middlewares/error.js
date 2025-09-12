const handleError =(err,req,res,next)=>{
    res.status( err.statusCode||500).json({ message:err.message ||'Some thing Wrong!!'});
    // console.log(err.statusCode);
    // console.log('message: ',err.message);
}
module.exports = handleError;