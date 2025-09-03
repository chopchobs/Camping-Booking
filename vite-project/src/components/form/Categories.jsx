import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/utils/Categories"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

const Categories = ({name,register,setValue}) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
     {/* keep data for use in the form */}
     <Input {...register(name)} type='hidden'/>
     <Label htmlFor={name} className='capitalize'>{name}</Label>
      {/* required is กำหนดให้ฟิลด์นี้ต้องกรอก */}
      {/* onValueChange หมายถึง การเปลี่ยนแปลงค่าของ Select */}
      {/* setValue ใช้สำหรับการตั้งค่าฟิลด์ในฟอร์ม */}
     <Select required onValueChange={(value) => setValue(name, value)}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Please select...." />
        </SelectTrigger>
        <SelectContent >
            {categories.map((item,index)=>{
                    return (
                        <SelectItem key={ index } value={ item.label }>
                           <span className="flex items-center gap-3 ">
                             <item.icon />
                             <p className="capitalize"> {item.label} </p>
                           </span>
                        </SelectItem>
                    )
            })}
        </SelectContent>
     </Select>
    </div>
  )
}
// after that input data in Schema for Update!! , utils-schema
export default Categories