import DropsDownList from "./DropsDownList";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const NavbarAdmin = () => {
  return (
    <nav>
      <div className="flex flex-col items-center py-4 px-8 justify-between sm:flex-row
       gap-4">
        
        {/* Logo */}
        <h1><Logo/></h1>

        {/* Search bar... */}
        <h1><SearchBar /></h1>

        {/* Profile */}
        <h1>
          <DropsDownList />
        </h1>
      </div>
    </nav>
  )
}
export default NavbarAdmin;