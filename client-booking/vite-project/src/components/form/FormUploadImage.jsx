import { resizerFile } from "@/utils/ResizerImage"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useAuth } from "@clerk/clerk-react"
import { uploadImage } from "@/api/uploadfiles"
import { Loader } from 'lucide-react';
import { useState } from "react"

const FormUploadImage = ({ setValue }) => {
    const [isLoading,setIsLoading] = useState(false); // loading
    const { getToken } = useAuth();
    // JS
    const hldOnChange = async (e)=>{
        setIsLoading(true); // loading
        const token = await getToken();  // clerk
        const file = e.target.files[0] // file
        if (!file) return;
        try {
         //code
         const resizedImage = await resizerFile( file ) // 800x600
         const res = await uploadImage( token,resizedImage ); // API
         console.log('image-check : ',res.data.result) // from Back-End
         setValue("image",res.data.result) // image
         setIsLoading(false); // loading
        } catch (error) {
            console.log(error);
            setIsLoading(false); // loading
        }
    }
  return (
    <div>   
        <Label>Upload Image</Label>
        <div className="mb-2 mt-2 flex items-center gap-2" > 
            <Input type='file'onChange={ hldOnChange }/>
            { isLoading && <Loader className="animate-spin" /> } 
            {/* && first  */}
        </div>
    </div>
  )
}
export default FormUploadImage;