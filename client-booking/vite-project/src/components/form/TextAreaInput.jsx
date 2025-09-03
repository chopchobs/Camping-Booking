import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({register,name,type,placeholder,errors}) => {
  return (
    // Textarea input field
    <div className="mb-3">
      <Label htmlFor={name} className='capitalize mb-2'>{name}</Label>
      <Textarea {...register(name)} rows={4} type={type} placeholder={placeholder}
       className={`${errors[name] && "border-red-500 "}`}
       /> 
       {/* Error message */}
      { errors[name] && (
        <p className="text-red-500 mt-1"> 
         {errors[name]?.message} 
        </p>
      )}
    </div>
  )
}
export default TextAreaInput; 