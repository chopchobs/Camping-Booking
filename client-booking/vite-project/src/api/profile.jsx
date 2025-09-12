    import axios from "axios";

export const createProfile =async(data,token)=>{
    //code boy 
    // console.log('func create profile-DATA:',data);
    // console.log('func create profile-ToKen:',token);
    return await axios.post('http://localhost:4000/api/profile',data,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
}