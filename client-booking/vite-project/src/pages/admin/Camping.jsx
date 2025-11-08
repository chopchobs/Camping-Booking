import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schema";
import Buttons from "@/components/form/Buttons";
import CategoriesInput from "@/components/form/Categories";
import MainMap from "@/components/map/MainMap";
import { createCamping } from "@/api/camping";
import { useAuth } from "@clerk/clerk-react"; //clerk
import FormUploadImage from "@/components/form/FormUploadImage";
import { CreateAlert } from "@/utils/Alert";

//https://react-hook-form.com/get-started
const Camping = () => {
  // JS
    const { getToken } = useAuth();  // clerk
    const { register, handleSubmit, formState, setValue, reset } = useForm({
        resolver: zodResolver( campingSchema ) //zod validation
    });
    const { errors,isSubmitting } =  formState;
    const share = async ( data ) => { // data from form
     await new Promise(( resolve ) => setTimeout(resolve, 1000)); // 1 second delay for better UX
        const token = await getToken();
        createCamping(data,token) 
        .then((res)=>{
          console.log(res)
           reset(); // clear input
          CreateAlert('success','Create Camping Successfully') // Swal
        })
        .catch((err)=>{
          console.log(err)
          CreateAlert('error','Create Camping Failed') // Swal
        })
    };
  return (
   <section>
      <h1 className="capitalized text-2xl font-semibold mb-4"> Create Camping </h1>
      <div className="border p-8 rounded-md">
        <h1 className="text-2xl font-semibold mb-4"> Create Input </h1>
        <form onSubmit={ handleSubmit( share ,(err) => console.log("❌ invalid:", err)) } 
              className="flex flex-col gap-4">
           <div className="grid md:grid-cols-2 gap-4 mt-4">
                {/* Title Input */}
                  <FormInputs 
                    register={register} 
                    name='title' 
                    type='text' 
                    placeholder='In Put Your Title' 
                    errors={errors} />
                {/* Price Input */}
                  <FormInputs 
                    register={register} 
                    name='price' 
                    type='number' 
                    placeholder='In Put Your Price' 
                    errors={errors} />
                {/* Description Input */}
                  <TextAreaInput 
                    register={register} 
                    name='description'
                    type='text' 
                    placeholder='In Put Your Description' 
                    errors={errors} />
                <div> {/* Category, Upload Image */} 
                  <CategoriesInput 
                    name='category' 
                    register={register} 
                    setValue={setValue} /> 
                  <FormUploadImage 
                  setValue={ setValue } />
                </div>
             {/* MAP */}
            </div>
             <MainMap register={register} setValue={setValue}/>
             <Buttons text="Create Camping" isPending={isSubmitting} />
        </form>
      </div>
   </section>
  );
};
export default Camping;