import NavbarAdmin from "@/components/navbar/NavbarAdmin";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <main className="container">
        <NavbarAdmin/>
        <Outlet />
    </main>
  )
}
export default LayoutAdmin;