import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schema";
import Buttons from "@/components/form/Buttons";
import CategoriesInput from "@/components/form/Categories";
import MainMap from "@/components/map/MainMap";

//https://react-hook-form.com/get-started
const Camping = () => {
        // register is a function that allows you to register your form inputs
        // handleSubmit is a function that handles form submission
        // formState contains information about the form's state
        // setValue is a function that allows you to set the value of a form field
    const { register, handleSubmit, formState, setValue } = useForm({
        // resolver is for validating the form data
        // zodResolver is a function that integrates Zod with React Hook Form
        resolver: zodResolver( campingSchema ),
    });
    // errors = formState.errors, re-structure ออกจาก formState
      //isSubmitting is false , true ส่งข้อมูล
    const { errors,isSubmitting } =  formState;
    // share - ตัวแปรอะไรก็ได้ที่ใช้ในการส่งข้อมูล !!!
     // data - ข้อมูลที่ถูกส่งมาจากฟอร์ม !!!
    const share = async( data) => {
        // Simulate a delay for demonstration purposes
     await new Promise((resolve) => setTimeout(resolve, 4000));
        //code body
        console.log(data);
    };
  return (
    <section>
        <h1 className="capitalized text-2xl font-semibold mb-4"> 
         Create Camping
        </h1>
        <div className="border p-8 rounded-md">
            <h1 className="text-2xl font-semibold mb-4">Create Input</h1>
            <form onSubmit={ handleSubmit (share) } className="flex flex-col gap-4">
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

                 <CategoriesInput name='category' register={register} setValue={setValue} />
                </div>
                {/* MAP */}
                <MainMap register={register} />
             <Buttons text="Create Camping" isPending={isSubmitting} />
            </form>
        </div>
    </section>
  );
};
export default Camping;