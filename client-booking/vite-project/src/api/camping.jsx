    // API - Camping
import axios from "axios";

// POST - Create
export const createCamping = async(data,token)=>{  
    //code boy 
    return await axios.post('http://localhost:4000/api/camping',data,{ 
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
}

// GET - list
export const listCamping = async(id)=>
    await axios.get(`http://localhost:4000/api/campings/${id}`)

// GET - read
export const readCamping = async(id)=>
    await axios.get(`http://localhost:4000/api/camping/${id}`) //${id} ดึงมาจาก useParams


// POST - Add or Remove Favorite
export const addOrRemoveFavorite =async(data,token)=>{ 
    //code boy 
    return await axios.post('http://localhost:4000/api/favorite',data,{ 
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
}

// GET - list favorites
export const listFavorites =async(token)=>{ 
    //code boy 
    return await axios.get('http://localhost:4000/api/myfavorites',{ 
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
}

// GET - Filter Camping
export const filterCamping =async(category,search)=>{ 
    //code boy 
    return await axios.get(`http://localhost:4000/api/filter-camping?category=${category}&search=${search}`);
}