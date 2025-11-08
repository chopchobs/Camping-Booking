// send to server (away)
const express = require('express');
const router = express.Router();
const { listCamping, readCamping, createCamping,
    updateCamping, deleteCamping, actionFavorite, 
    listFavorites,
    filterCamping
} = require('../controllers/camping');
const { requireAuth } = require('@clerk/express') // ใช้ authCheckUser component แทน
const { authCheckUser } =require('../middlewares/auth')

// ✅-Method-✅ : 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE
//@ENDPOINT http://localhost:4000/api/campings
//@METHOD   1️⃣GET (list camping, ค้นหาสินค้า) 
//@ACCESS   Public
router.get('/campings/:id',listCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   2️⃣GET (read camping เข้าไปหาสินค้าใน)
//@ACCESS   Public
router.get('/camping/:id',readCamping);


//@ENDPOINT http://localhost:4000/api/camping
//@METHOD   3️⃣POST ( create Camping)
//@ACCESS   Private
// private: ต้องล็อกอินก่อน แล้วค่อยแนบ user object
router.post('/camping',authCheckUser,createCamping);

// Favorite Route
router.post('/favorite',authCheckUser,actionFavorite);
router.get('/myfavorites',authCheckUser,listFavorites);

// Filter
// http://localhost:4000/api/filter-camping?hostel&search=null
router.get('/filter-camping',filterCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   4️⃣PUT (update Camping)
//@ACCESS   Private
router.put('/camping/:id',updateCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   5️⃣DELETE (delete Camping)
//@ACCESS   Private
router.delete('/camping/:id',deleteCamping);



//export router
module.exports = router;