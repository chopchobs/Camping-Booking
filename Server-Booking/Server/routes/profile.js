// send to server (away)
const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/profile')
const { authCheckUser } = require('../middlewares/auth')

// ✅Method: 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

router.post('/profile', authCheckUser, createProfile);

module.exports = router;