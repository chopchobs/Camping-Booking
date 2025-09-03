const express = require('express');
const router = express.Router();
const {listCamping,readCamping,
    createCamping,updateCamping,
    deleteCamping} = require('../controllers/camping');
const {authCheck} =require('../middlewares/auth')

// ✅-Method-✅ : 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE
//@ENDPOINT http://localhost:4000/api/camping
//@METHOD   1️⃣GET (list camping, ค้นหาสินค้า) 
//@ACCESS   Public
router.get('/camping',authCheck,listCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   2️⃣GET (read camping เข้าไปหาสินค้าใน)
//@ACCESS   Public
router.get('/camping/:id',authCheck,readCamping);

//@ENDPOINT http://localhost:4000/api/camping
//@METHOD   3️⃣POST ( create Camping)
//@ACCESS   Private
router.post('/camping',authCheck,createCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   4️⃣PUT (Update Camping)
//@ACCESS   Private
router.put('/camping/:id',authCheck,updateCamping);

//@ENDPOINT http://localhost:4000/api/camping/1
//@METHOD   5️⃣DELETE (delete Camping)
//@ACCESS   Private
router.delete('/camping/:id',authCheck,deleteCamping);




//export router
module.exports = router;