import { Input } from "../ui/input"
import { Label } from "../ui/label"

const FormInputs = ({
  register,
  name,
  type,
  placeholder,
  errors
}) => {
  // console.log('test',errors[name]);
  return (
    <div className="mb-4">
    {/* Label */}
      <Label htmlFor={ name } className='capitalize mb-2'>{ name }</Label>
    {/* Input */}
      <Input { 
        ...register( name )} 
        type = { type } 
        placeholder = { placeholder } 
        className = {`${errors[ name ] && "border-red-500 "}`}/>
    {/* Error message */}
        { errors[ name ] && (
          <p className="text-red-500 mt-1"> 
            {errors[ name ]?.message} 
          </p>
        )}
    </div>
  )
}
export default FormInputs;