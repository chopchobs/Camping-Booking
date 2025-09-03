import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import NotFound from "@/pages/Notfound";
import Camping from "@/pages/admin/Camping";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private Routes */}
        <Route path="admin" element={<LayoutAdmin />}>
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