const express = require('express');
const router = express.Router();

const { 
    createBooking,
    checkout, 
    checkOutStatus, 
    listBookings
} = require('../controllers/booking');
const { authCheckUser }= require('../middlewares/auth');

// ✅Method: 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

// @ENDPOINT http://localhost:4000/api/bookings
// @METHOD 1️⃣GET
// @ACCESS Public
router.get('/bookings',authCheckUser,listBookings);

// @ENDPOINT http://localhost:4000/api/booking
// @METHOD 2️⃣ POST
// @ACCESS Public
router.post('/booking',authCheckUser,createBooking);

// @ENDPOINT http://localhost:4000/api/checkout
// @METHOD 2️⃣ POST
// @ACCESS Public
// @Payment
router.post('/checkout',authCheckUser,checkout);

// @ENDPOINT http://localhost:4000/api/checkout-status/:session_id
// @METHOD 1️⃣GET
// @ACCESS Public
router.get('/checkout-status/:session_id',authCheckUser,checkOutStatus);

module.exports= router;