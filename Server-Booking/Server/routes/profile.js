// send to server (away)
const express = require('express');
const router = express.Router();

// const {authCheck}=require('../middlewares/auth')
const {createProfile}=require('../controllers/profile')
const {authCheck}=require('../middlewares/auth')

// ✅Method: 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

//@ENDPOINT http://localhost:4000/api/profile
//@METHOD 1️⃣ GET ( Create Profile)
//@ACCESS Public


//@ENDPOINT http://localhost:4000/api/profile
//@METHOD 2️⃣ POST
//@ACCESS Public
router.post('/profile',authCheck,createProfile);



module.exports= router;