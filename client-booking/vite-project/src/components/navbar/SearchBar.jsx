import { useSearchParams } from "react-router";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
 // JS
 const [ searchParams, setSearchParams ] = useSearchParams(); // URL
 
  const UpdateSearch = useDebouncedCallback((value)=>{
    const params = new URLSearchParams(searchParams)
    // condition 
    if(value){
      params.set('search',value);
    }else{
      params.delete('search');
    }
    setSearchParams(params);
  },500);

 const hleSearch = (e)=>{
  UpdateSearch(e.target.value);
 }
  return (
    <>
        <Input
         onChange ={hleSearch}
         type="text"
         placeholder="Search..."
         className="border max-w-xs rounded" />
    </>
  )
}
export default SearchBar;