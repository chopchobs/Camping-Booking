import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/clerk-react";
import { createProfile } from "@/api/profile";

const Profile = () => {
  //javascrip
  //clerk
  const { getToken,userId } =useAuth()
  const { register, handleSubmit, formState, setValue } = useForm({
    // Validate
    resolver: zodResolver ( profileSchema ),//แสดงข้อกำหนดแต่ละตัวอักษร
  });
  const { errors, isSubmitting }= formState;

  const share = async (data) => {
    //code body
    const token = await getToken();
    createProfile(data,token)
    .then((res)=>{  
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={ handleSubmit ( share ) }> 
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              //name ตรงกับฐานข้อมูลจะง่าย 
              name='firstname'
              type='text'
              placeholder='Input your first name'
              errors={errors}
            />
            <FormInputs
              register={register}
              name='lastname'
              type='text'
              placeholder='Input your last name'
              errors={errors}
            />
            <Buttons
             text='create profile'
             isPending={isSubmitting}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Profile;