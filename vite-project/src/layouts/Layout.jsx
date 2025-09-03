import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="container">
     <Navbar/>
     <Outlet />
    </main>
  )
}
export default Layout;