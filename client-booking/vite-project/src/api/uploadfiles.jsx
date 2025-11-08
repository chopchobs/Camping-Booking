import axios from "axios";

export const uploadImage = async( token, form)=>{ 
    return await axios.post(
        'http://localhost:4000/api/image',
        {image:form},{ 
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
}