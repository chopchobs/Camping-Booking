//ตัวกลางส่งออก response ตาม statusCode และ message
const handleError =(err,req,res,next)=>{
    res.status( err.statusCode|| 500).json({ message:err.message ||'Some thing Wrong!!'});
}
module.exports = handleError;