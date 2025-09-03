import { Input } from "../ui/input"
import { Label } from "../ui/label"

//  or || first true (last false)  , and && first false (last true)
// 0, '', undefined, null, NaN = false
// 1, true, "string", [] = true
// const result = 0 || '' || undefined || null;   
// console.log(result);



const FormInputs = ({register,name,type,placeholder,errors}) => {
  console.log('test',errors[name]);
  return (
    // Textarea input field
    <div className="mb-4">
      <Label htmlFor={name} className='capitalize mb-2'>{name}</Label>
      <Input {...register(name)} type={type} placeholder={placeholder} 
       className={`${errors[name] && "border-red-500 "}`}
      />
      {/* Error message */}
      {errors[name] && (
       <p className="text-red-500 mt-1"> 
       {errors[name]?.message} 
       </p>
      )}
    </div>
  )
}
export default FormInputs;