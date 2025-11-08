import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import NotFound from "@/pages/Notfound";
import Camping from "@/pages/admin/Camping";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "@/pages/user/Profile";
import ProtectedRoute from "./ProtectedRoute";
import CampingDetail from "@/pages/user/Campingdetail";
import Checkout from "@/pages/user/Checkout";
import CheckoutComplete from "@/pages/user/CheckoutComplete";
import MyOrders from "@/pages/user/MyOrders";
import MyFavorites from "@/pages/user/Myfavorites";
import MyReservations from "@/pages/user/MyReservations";
import MyCamping from "@/pages/user/MyCamping";


const AppRouter = () => {
  // code body
  return (
    <BrowserRouter>
      <Routes>
      {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      {/* Private Users */}
        <Route path="user" element={<Layout/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="camping/:id" element={<CampingDetail/>}/>
          <Route path="checkout/:id" element={<Checkout/>}/>
          <Route path="complete/:session" element={<CheckoutComplete/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="myfavorites" element={<MyFavorites/>}/>
          <Route path="my-campings" element={<MyCamping/>}/>
          <Route path="myreservations" element={<MyReservations/>}/>
        </Route>
      {/* Private Admins - Protected Route */}
        <Route path="admin" element={<ProtectedRoute el={<LayoutAdmin />} />}> 
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>
      {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter;