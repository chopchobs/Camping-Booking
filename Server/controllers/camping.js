// 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

// 1️⃣GET
exports.listCamping=(req,res)=>{
    try {
        //code body
        res.send("List Camping"); 
    } catch (error) {
        console.error(error.message);
        // Send a 500 Internal Server Error response
        res.status(500).json({message:'Server Error'});
    }
};

// 2️⃣GET
exports.readCamping=(req,res)=>{
    try {
        //code body
        res.send("Read Camping");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Server Error'});
    }
}

// 3️⃣POST
exports.createCamping=(req,res)=>{
    try {
        //code body
        res.send("Create Camping");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Server Error'})
    }
}

// 4️⃣PATCH
exports.updateCamping=(req,res)=>{
    try {
        //code body
        res.send("Update Camping");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Server Error'});
    }
}

// 5️⃣DELETE
exports.deleteCamping=(req,res)=>{
    try {
        //code body
        res.send("Delete Camping");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Server Error'});
    }
}