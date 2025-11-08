import { categories } from "@/utils/Categories";
import { useSearchParams } from "react-router-dom";

const CategoryBar = () => {
    // JS
    const [ searchParams,setSearchParams ] = useSearchParams() //useSearchParams
    const hldFilter =( category )=>{
        //  console.log('category:',category);
     const params = new URLSearchParams( searchParams );
     const c = searchParams.get('category') || '';
        if ( c === category ) {
            params.delete('category');  // ❌ ถ้ากดซ้ำ category เดิม → ลบออก
        }else{
            params.set('category',category);// ✅ ถ้าเลือกใหม่ → ตั้งค่าใหม่
        }
        setSearchParams(params);    // 💥 อัปเดต URL
    };
  return (
    <div className="flex justify-between">
        { categories.map((item)=>{
            return <>
            <button onClick={()=> hldFilter( item.label )}
                className="flex flex-col items-center m-2
                hover:text-teal-500" key={ item.label }
                 >
                 <item.icon/>
                <p className="capitalize font-bold">
                 {item.label}
                </p>
            </button>
            </>
            })
        }
    </div>
  )
}
export default CategoryBar;