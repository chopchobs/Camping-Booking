const express = require('express');
const router = express.Router();
const { authCheckUser }= require('../middlewares/auth');
const { listStats, listReservations, 
    listAllReservations, listMyCampings } = require('../controllers/admin');

// ✅Method: 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

router.get('/stats',authCheckUser,listStats);
router.get('/reservations',authCheckUser,listReservations);
router.get('/all-reservations',authCheckUser,listAllReservations);
router.get('/my-campings',authCheckUser,listMyCampings);

module.exports= router; 