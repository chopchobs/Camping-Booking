 const prisma = require('../config/prisma');
const { findCenter } = require('../utils/findCenter');

// 1️⃣GET, 2️⃣POST, 3️⃣PUT, 4️⃣PATCH, 5️⃣DELETE

// 1️⃣GET-list 
exports.listCamping= async(req,res,next)=>{
    try {
        //code body
        const { id } = req.params; //receive from Front url(Params)
        console.log('id:',id);
        const campings = await prisma.landmark.findMany({
            include:{
                favorites:{
                    where:{ profileId:id}, 
                    select:{ id:true }
                }
            }
        });
        // ถ้ามีค่าใน favorites มากกว่า 0 แสดงว่า เป็น favorite
        const listCampingOfLike =  campings.map(( item )=>({ 
            ...item, 
            isFavorite: item.favorites.length > 0 
        }));
        // Find Center 
        const center = findCenter( listCampingOfLike )
        res.json({ result: listCampingOfLike ,center:center}); 
    } catch (error) {
        next(error);
    }
};

// 2️⃣GET-read : find id 
exports.readCamping = async(req,res,next)=>{
    try {
        //code body
        const { id } = req.params;
        // console.log(id)
        const camping= await prisma.landmark.findFirst({
            where:{
                id:Number(id)
            }
        });
        res.json({result:camping});
    } catch (error) {
        next(error); // ส่ง error ไปที่ middleware ถัดไป (error handler)
    }
}

exports.listFavorites= async(req,res,next)=>{
    try {
        //code body
        const { id }  =req.user; 
        const favorites = await prisma.favorite.findMany({
            where: { profileId:id },
            include:{ landmark:true },
        })
        const favoriteWithLike = favorites.map((item)=>{
            return {
                ...item,
                landmark:{
                    ...item.landmark,
                    isFavorite:true,
                },
            };
        });
        // console.log('favoriteWithLike:',favoriteWithLike) 
        res.json({ message:'success', result: favoriteWithLike })
    } catch (error) {
        next(error);
    }
}
 
// 3️⃣POST
exports.createCamping= async(req,res,next)=>{
    try {
        //code body
        const { id } =req.user;
        const { title,price,description,category,lat,lng,image } = req.body
        const camping = await prisma.landmark.create({
            data:{
                title: title,
                price: price,
                description: description,
                category: category,
                lat: lat,
                lng: lng,
                public_id: image.public_id,
                secure_url: image.secure_url,
                profileId:id,
            },
        })
        res.json({ message:"Create Profile Successfully!", 
            result:camping,
        }); 
    } catch (error) {
        next(error);
    }
}

// 3️⃣POST
exports.actionFavorite = async(req,res,next)=>{
    try {
        // code body
        const { campingId, isFavorite } = req.body; //ex. { campingId: 19, isFavorite: false }
        const { id } = req.user; //ex. user_32QA9R0zIMni4Q0dWficxY4Xkds
        // Add or Remove
        let result
        if (isFavorite) {
            // Remove - when isFavorite = true (have in favorite)
            result = await prisma.favorite.deleteMany({
                where:{
                    profileId:id,
                    landmarkId:campingId,
                }
            })
        } else { // Add - when isFavorite = false (not have in favorite)
            result = await prisma.favorite.create({
                data:{
                    profileId:id,
                    landmarkId:campingId,
                }
            })
        }
        res.json({ message: isFavorite
            ?'Remove Favorite' // when isFavorite = true
            :'Add Favorite ' // when isFavorite = false
         })
    } catch (error) {
        next(error)
    }
}

// 4️⃣PATCH
exports.updateCamping=(req,res,next)=>{
    try {
        //code body
        res.send("Update Camping");
    } catch (error) {
        next(error);
    }
}

// 5️⃣DELETE
exports.deleteCamping=(req,res,next)=>{
    try {
        //code body
        res.send("Delete Camping");
    } catch (error) {
        next(error);
    }
}
// Get - Filter
exports.filterCamping=async(req,res,next)=>{
    try {
        //code body
        //req.query = ข้อมูลที่อยู่ หลังเครื่องหมาย ? ใน URL และถูกแปลงเป็น object ให้เราใช้งานได้ทันที
        const { category, search } = req.query; // use data from URL
        const filter = [];
        if ( category ) {
            filter.push({ category });
        }
        if ( search ) {
            filter.push({ title: { contains:search } });
        }
        const result = await prisma.landmark.findMany({
            where:{
                OR:filter
            },include:{
                favorites:{
                  select:{
                    id:true,
                },},},
        });
         const listCampingOfLike =  result.map((item)=>({ 
            ...item, 
            isFavorite: item.favorites.length > 0 
        }));
        // Find Center
        const center = findCenter( listCampingOfLike )
        // console.log('findCenter:',center)
        res.json({result:listCampingOfLike, center:center});
    } catch (error) {
        next(error);
    };
}