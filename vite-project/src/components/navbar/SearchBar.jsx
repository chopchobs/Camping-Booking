import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <>
        <Input
         type="text"
         placeholder="Search..."
         className="border max-w-xs rounded" />
    </>
  )
}
export default SearchBar;