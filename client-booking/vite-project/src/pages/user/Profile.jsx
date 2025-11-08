import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/clerk-react";  // clerk
import { createProfile } from "@/api/profile";

const Profile = () => {
  // clerk
  const { getToken } = useAuth() 
  const { register, handleSubmit, formState, setValue } = useForm({ // useForm from react-hook-form
    resolver: zodResolver ( profileSchema ), // ใช้ zodResolver กับ profileSchema
  });
  const { errors, isSubmitting }= formState; 
  const share = async (data) => {
    //code body
    const token = await getToken(); 
    createProfile( data,token )   // call API 
    .then((res)=>{  // response from API
      console.log(res);
    })
    .catch((err)=>{ // error handling
      console.log(err);
    })
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>
      <div className="border p-8 rounded-md">
        {/* Form , share = keep data */}
        <form onSubmit={ handleSubmit ( share ) }>  
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            {/* First Name */}
            <FormInputs
              register={register}
               name='firstname' // ชื่อฟิลด์ตรงกับ schema
                type='text'
                 placeholder='Input your first name'
                  errors={errors}
            />
            {/* Last Name */}
            <FormInputs
              register={register}
               name='lastname' // ชื่อฟิลด์ตรงกับ schema
                type='text'
                 placeholder='Input your last name'
                  errors={errors}
            />
            {/* Buttons */}
            <Buttons
             text='create profile'
              isPending={ isSubmitting }
               location={'/'}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Profile;