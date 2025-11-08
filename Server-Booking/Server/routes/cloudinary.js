const express = require('express');
const router = express.Router();
//controllers
const { authCheckUser }=require('../middlewares/auth');
const { createImages } = require('../controllers/cloudinary');

// ✅Method: 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

//@METHOD 2️⃣ POST
//@ENDPOINT http://localhost:4000/api/image
router.post('/image',authCheckUser,createImages);

module.exports= router;