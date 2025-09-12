# Client

## Step 1 Create vite

```bash
npm create vite .
npm install
npm run dev
```

## Step 2 Install tailwindcss

```bash
npm install tailwindcss @tailwindcss/vite
```

update this code to vite.config

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

update index.css

```css
@import "tailwindcss";
```

run project and Enjoy

```jsx
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

```bash
npm run dev
```

## Step 3 Routes

create folder routes
/src/routes/AppRoutes.jsx

```jsx
const AppRoutes = () => {
  return <div>AppRoutes</div>;
};
export default AppRoutes;
```

### Install Router

https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

update main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
```

udpate code AppRoutes.jsx
/src/routes/AppRoutes.jsx

```jsx
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
};
export default AppRoutes;
```

## Step 4 Pages

create pages folder
/src/pages

```plaintext
Home.jsx
About.jsx
```

/src/pages/admin

```plaintext
Dashboard.jsx
Manage.jsx
```

/src/pages/user

```plaintext
HomeUser.jsx
MapUser.jsx
```

/src/pages/auth

```plaintext
Register.jsx
Login.jsx
```

## Step 5 update AppRoutes.jsx

```jsx
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import HomeUser from "../pages/user/HomeUser";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import MapUser from "../pages/user/MapUser";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Private */}
        <Route path="/user/home" element={<HomeUser />} />
        <Route path="/user/map" element={<MapUser />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manage" element={<Manage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
```

## Step 6 Layouts

create folder layouts
/src/layouts/Layouts.jsx

```jsx
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};
export default Layout;
```

/src/layouts/LayoutsAdmin.jsx

```jsx
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      LayoutAdmin
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
```

update
/src/routes/AppRoutes.jsx

```jsx
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import HomeUser from "../pages/user/HomeUser";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import MapUser from "../pages/user/MapUser";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import NotFound from "../pages/NotFound";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private */}
        <Route path="user" element={<Layout />}>
          <Route index element={<HomeUser />} />
          <Route path="/user/map" element={<MapUser />} />
        </Route>

        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
```

## Step 7 Navbar

/src/components/MainNav.jsx

```jsx
import { Link } from "react-router";

const MainNav = () => {
  return (
    <nav
      className="flex justify-between 
      bg-green-200 text-green-900 
      font-bold px-8 py-2 my-2 rounded-md shadow-md"
    >
      <div className="flex gap-4">
        <Link to="/">Logo</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/register"> Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
export default MainNav;
```

update this code to Layout.jsx
/src/layouts/Layout.jsx

```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

const Layout = () => {
  return (
    <div className="container">
      <MainNav />
      <Outlet />
    </div>
  );
};
export default Layout;
```

update index.css

```css
@layer components {
  .container {
    @apply px-8 mx-auto;
  }
}
```

## Step 8 Register page

```jsx
const Register = () => {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div class="w-64 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register
        </h1>
        {/* Form */}
      </div>
    </div>
  );
};
export default Register;
```

and then update code

```jsx
const Register = () => {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div class="w-64 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register
        </h1>
        {/* Form */}
        <form>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border border-gray-400 
              rounded-md placeholder:px-2 p-1 px-2"
              type="text"
              name="email"
              placeholder="Email"
            />

            <input
              className="w-full border border-gray-400 
              rounded-md placeholder:px-2 p-1 px-2"
              type="text"
              name="text"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-900 text-green-100 px-2 
            py-1 rounded-md hover:cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
```

update another input

```jsx
const Register = () => {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div class="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register
        </h1>
        {/* Form */}
        <form>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="email"
              placeholder="Email"
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="password"
              placeholder="Password"
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-900 text-green-100 px-2 
            py-1 rounded-md hover:cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
```

## Step 9 OnChange

```js
const hdlOnchange = (e) => {
  console.log(e.target.name, e.target.value);
};
```

and

```html
<input
  className="w-full border border-gray-400
              rounded-md p-1 px-4"
  type="text"
  name="firstname"
  placeholder="First Name"
  onChange="{hdlOnchange}"
/>
```

## Step 10 useState

```jsx
const [value, setValue] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const hdlOnchange = (e) => {
  // console.log(e.target.name, e.target.value);
  setValue({
    ...value,
    [e.target.name]: e.target.value,
  });
};
console.log(value);
```

## Step 11 Submit

```js
const hdlSubmit = (e) => {
  e.preventDefault();
  console.log("Submit");
  console.log(value);
};
```

and

```plaintext
 <form onSubmit={hdlSubmit}>
```

## Step 12 Alert

https://sweetalert2.github.io/#download

```bash
npm install sweetalert2
```

import and use

```jsx
import Swal from "sweetalert2";

Swal.fire("test");
// or
Swal.fire({
  icon: "error",
  title: "Error!!",
  text: "Hello, sweetalert",
});
```

## Step 13 Connect backend

```bash
npm i axios
```

### Then catch

```js
axios
  .post("http://localhost:8000/api/register", value)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

full

```js
const hdlSubmit = (e) => {
  e.preventDefault();
  // console.log("Submit");
  // console.log(value);

  axios
    .post("http://localhost:8000/api/register", value)
    .then((res) => console.log(res))
    .catch((err) => {
      // console.log(err.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Error!!",
        text: err.response?.data?.message || "Input Error",
      });
    });
};
```

and another way

### try catch

```js
const hdlSubmit = async (e) => {
  e.preventDefault();
  // console.log("Submit");
  // console.log(value);
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    console.log(res);
    Swal.fire({
      icon: "success",
      title: "Success!!",
      text: res.data?.message || "Register Success",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error!!",
      text: error.response?.data?.message || "Input Error",
    });
  }
};
```

separate alert to func
/utils/createAlert.jsx

```js
import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Somthing wrong",
    timer: 2000,
  });
};
```

and register.jsx

```js
import { createAlert } from "../../utils/createAlert";
```

```js
const hdlSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    console.log(res);
    createAlert("success", "Register Success");
  } catch (error) {
    createAlert("error", error.response?.data?.message);
  }
};
```

## Step 14 React-Hook-Form

https://react-hook-form.com/

```bash
npm install react-hook-form
```

create Register1.jsx component and change from AppRoutes.jsx

Register1.jsx

```jsx
import axios from "axios";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
const Register1 = () => {
  const { register, handleSubmit } = useForm();

  const hdlSubmit = async (value) => {
    // e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register1
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="firstname"
              {...register("firstname")}
              placeholder="First Name"
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="lastname"
              {...register("lastname")}
              placeholder="Last Name"
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="email"
              {...register("email")}
              placeholder="Email"
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="password"
              {...register("password")}
              placeholder="Password"
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-900 text-green-100 px-2 
            py-1 rounded-md hover:cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

Separate components
create /components/form/FormInput.jsx

```jsx
// rafce
const FormInput = ({ register, name }) => {
  return (
    <input
      className="w-full border border-gray-400 
  rounded-md p-1 px-4"
      type="text"
      name={name}
      {...register(name)}
      placeholder={name}
    />
  );
};
export default FormInput;
```

Register1.jsx

```jsx
import axios from "axios";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
const Register1 = () => {
  const { register, handleSubmit } = useForm();

  const hdlSubmit = async (value) => {
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register1
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="firstname" />
            <FormInput register={register} name="lastname" />
            <FormInput register={register} name="email" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-900 text-green-100 px-2 
            py-1 rounded-md hover:cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

### isSummitting

```js
const { register, handleSubmit, formState } = useForm();
const { isSubmitting } = formState;
console.log(isSubmitting);
const hdlSubmit = async (value) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    createAlert("success", "Register Success");
  } catch (error) {
    createAlert("info", error.response?.data?.message);
  }
};
```

```jsx
<div className="flex justify-center">
  <button
    disabled={isSubmitting}
    className=" bg-green-900 text-green-100 px-4
            py-1 rounded-md hover:cursor-pointer font-semibold"
  >
    {isSubmitting ? "Loading..." : "Register"}
  </button>
</div>
```

### Separate components

/components/form/Buttons.jsx

```jsx
// rafce
const Buttons = ({ isSubmitting }) => {
  return (
    <button
      disabled={isSubmitting}
      className=" bg-green-900 text-green-100 px-4 
  py-1 rounded-md hover:cursor-pointer font-semibold"
    >
      {isSubmitting ? "Loading..." : "Register"}
    </button>
  );
};
export default Buttons;
```

```jsx
<div className="flex justify-center">
  <Buttons isSubmitting={isSubmitting} />
</div>
```

### Loading lucide

https://lucide.dev/icons/

```bash
npm install lucide-react
```

update /components/form/Buttons.jsx

```jsx
// rafce
import { Loader } from "lucide-react";
const Buttons = ({ isSubmitting }) => {
  return (
    <button
      disabled={isSubmitting}
      className=" bg-green-900 text-green-100 px-4 
  py-1 rounded-md hover:cursor-pointer font-semibold"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <p>Register</p>
      )}
    </button>
  );
};
export default Buttons;
```

## Step 15 Validate with zod client

https://www.npmjs.com/package/@hookform/resolvers
https://zod.dev/

show error

```jsx
const { isSubmitting, errors } = formState;
console.log(errors);
```

```bash
npm i @hookform/resolvers
npm i zod
```

/src/utils/schemas.jsx

```jsx
import { z } from "zod";
export const registerSchema = z
  .object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    password: z.string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
    firstname: z.string().min(3, "Firstname ต้องมีอย่างน้อย 3 ตัวอักษร"),
    lastname: z.string().min(3, "Lastname ต้องมีอย่างน้อย 3 ตัวอักษร"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password และ Confirm Password ต้องตรงกัน",
    path: ["confirmPassword"], // ระบุ path ที่ error ควรแสดง
  });
```

update Register1.jsx

```jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/schemas";
```

```jsx
const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(registerSchema),
});
const { isSubmitting, errors } = formState;
console.log(errors);
// and
console.log(errors.password?.message);
```

all code Register.jsx

```jsx
import axios from "axios";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/schemas";

const Register1 = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register1
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="firstname" errors={errors} />
            <FormInput register={register} name="lastname" errors={errors} />
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="password" errors={errors} />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

/components/form/FormInput.jsx

```jsx
// rafce
const FormInput = ({ register, name, errors, type = "text" }) => {
  // console.log(errors[name]);
  return (
    <div>
      <input
        className="w-full border border-gray-400 
      rounded-md p-1 px-4"
        type={type}
        name={name}
        {...register(name)}
        placeholder={name}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default FormInput;
```

update Register.jsx

```jsx
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
            <FormInput
              register={register}
              type="password"
              name="confirmPassword"
              errors={errors}
            />

```

## Step 16 Separate function to API

create folder
/src/api/auth.jsx

```jsx
import axios from "axios";
export const actionRegister = async (value) => {
  return await axios.post("http://localhost:8000/api/register", value);
};
```

update code
/src/pages/Register1.jsx

```jsx
import { actionRegister } from "../../../api/auth";

//  .......

const hdlSubmit = async (value) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await actionRegister(value);
    createAlert("success", "Register Success");
  } catch (error) {
    createAlert("info", error.response?.data?.message);
  }
};
```

and reset form
Register1.jsx

```jsx
const { register, handleSubmit, formState, reset } = useForm({
  resolver: zodResolver(registerSchema),
});
const { isSubmitting, errors } = formState;
//   console.log(errors.password?.message);
const hdlSubmit = async (value) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await actionRegister(value);
    createAlert("success", "Register Success");
    reset();
  } catch (error) {
    createAlert("info", error.response?.data?.message);
  }
};
```

## Step 17 Login

Start from /api/auth.js

```jsx
export const actionLogin = async (value) => {
  return await axios.post("http://localhost:8000/api/login", value);
};
```

and then
copy code from Register1.jsx
and change Components name
\*\* don't forget change Buttons.jsx to props label

```jsx
// rafce
import { Loader } from "lucide-react";
const Buttons = ({ isSubmitting, label }) => {
  return (
    <button
      disabled={isSubmitting}
      className=" bg-green-900 text-green-100 px-4 
  py-1 rounded-md hover:cursor-pointer font-semibold"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
};
export default Buttons;
```

Login.jsx

```jsx
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

import { actionLogin } from "../../../api/auth";

const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionLogin(value);
      console.log(res);
      createAlert("success", "Login Success");
      reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Login
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
```

### Validate with zod

/utils/schemas.jsx

```jsx
export const loginSchema = z.object({
  email: z.string().email("Email ไม่ถูกต้อง"),
  password: z.string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
});
```

Login.jsx

```jsx
import { loginSchema } from "../../utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
```

and

```jsx
const { register, handleSubmit, formState, reset } = useForm({
  resolver: zodResolver(loginSchema),
});
```

## Step 18 Redirect

Login.jsx

```jsx

import { useNavigate } from "react-router";

const Login = () => {
  const hdlSubmit = async (value) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionLogin(value);
      // console.log(res.data.result.role);
      createAlert("success", "Login Success");
      const role = res.data.result.role;
      roleRedirect(role);
      // reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  const roleRedirect = (role) => {
    // console.log(role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

```

## Step 19 Zustand

```bash
npm install zustand
```

/store/auth-store.jsx

```jsx
import axios from "axios";
import { create } from "zustand";
const authStore = (set) => ({
  user: [],
  token: null,
  actionLogin_: async (value) => {
    try {
      const res = await axios.post("http://localhost:8000/api/login", value);
      //   console.log(res.data.result);
      //   console.log(res.data.result.role);
      //   console.log(res.data.token);
      const { result, token } = res.data;
      set({ token: token, user: result });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
});

const useAuthStore = create(authStore);

export default useAuthStore;
```

and update login

```jsx
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";
import { useNavigate } from "react-router";

import { actionLogin } from "../../../api/auth";
import { loginSchema } from "../../utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "../../../store/auth-store";

const Login = () => {
  // Zustand
  const actionLogin_ = useAuthStore((state) => state.actionLogin_);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionLogin_(value);
      // console.log(res.data.result.role);
      createAlert("success", "Login Success");
      const role = res.data.result.role;
      roleRedirect(role);
      // reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  const roleRedirect = (role) => {
    // console.log(role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Login
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
```

### update Persist

```jsx
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const authStore = (set) => ({
  user: [],
  token: null,
  actionLogin_: async (value) => {
    try {
      const res = await axios.post("http://localhost:8000/api/login", value);
      //   console.log(res.data.result);
      //   console.log(res.data.result.role);
      //   console.log(res.data.token);
      const { result, token } = res.data;
      set({ token: token, user: result });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
});

const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
```

and then return

```jsx
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionLogin } from "../api/auth";
const authStore = (set) => ({
  user: [],
  token: null,
  actionLogin_: async (value) => {
    try {
      const res = await actionLogin(value);
      //   console.log(res.data.result);
      //   console.log(res.data.result.role);
      //   console.log(res.data.token);
      const { result, token } = res.data;
      set({ token: token, user: result });

      return { success: true, role: result.role };
    } catch (error) {
      //   console.log(error.response.data.message);
      return { success: false, error: error.response.data.message };
    }
  },
});

const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
```

update Login.jsx

```jsx
const hdlSubmit = async (value) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await actionLogin_(value);
  console.log(res);
  if (res.success) {
    roleRedirect(res.role);
    createAlert("success", "Login Success");
  } else {
    createAlert("info", res.error);
  }
};
```

## Step 20

create
/routes/ProtectRoute.jsx

```jsx
const ProtectRoute = () => {
  console.log("Protect Route js");
  return <div>ProtectRoute</div>;
};
export default ProtectRoute;
```

and use

```jsx
<Route path="admin" element={<ProtectRoute el={<LayoutAdmin />} />}>
  <Route index element={<Dashboard />} />
  <Route path="manage" element={<Manage />} />
</Route>
```

and update Code in ProtectRoute.jsx

```jsx
const ProtectRoute = ({ el }) => {
  console.log("Protect Route js");
  return el;
};
export default ProtectRoute;
```

and then

```jsx
import { useEffect } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  console.log("Protect Route js");
  console.log(token);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return el;
};
export default ProtectRoute;
```

and then

```jsx
import { useEffect } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  console.log("Protect Route js");
  console.log(token);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return el;
};
export default ProtectRoute;
```

and then add useState

```jsx
import { useEffect, useState } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  //   console.log("Protect Route js");
  //   console.log(token);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
      setOk(true);
    } catch (error) {
      setOk(false);
      console.log(error.response.data.message);
    }
  };
  console.log(ok);
  return el;
};
export default ProtectRoute;
```

and then

```jsx
import { useEffect, useState } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  //   console.log("Protect Route js");
  //   console.log(token);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
      setOk(true);
    } catch (error) {
      setOk(false);
      console.log(error.response.data.message);
    }
  };
  console.log(ok);

  if (ok === null) {
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorize</h1>;
  }
  return el;
};
export default ProtectRoute;
```

test in jsitor

```js
const allows = ["ADMIN", "USER"];

console.log(allows.includes("USER"));
console.log(allows.includes("ADMIN"));
console.log(allows.includes("GUEST"));
```

and update code

```jsx
<Route
  path="admin"
  element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />}
>
  <Route index element={<Dashboard />} />
  <Route path="manage" element={<Manage />} />
</Route>
```

and then full code

```jsx
import { useEffect, useState } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el, allows }) => {
  const token = useAuthStore((state) => state.token);
  //   console.log("Protect Route js");
  //   console.log(token);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    // code
    console.log("Step 2 in use Effect");
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
      if (allows.includes(role)) {
        setOk(true);
      } else {
        setOk(false);
      }
    } catch (error) {
      setOk(false);
      console.log(error.response.data.message);
    }
  };
  //   console.log(ok);

  if (ok === null) {
    console.log("step 1 in ok === null");
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorize</h1>;
  }
  return el;
};
export default ProtectRoute;
```

```jsx
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import HomeUser from "../pages/user/HomeUser";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import MapUser from "../pages/user/MapUser";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import NotFound from "../pages/NotFound";
import Register1 from "../pages/auth/Register1";
import Login from "../pages/auth/Login";
import ProtectRoute from "./ProtectRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register1 />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private */}
        <Route
          path="user"
          element={<ProtectRoute el={<Layout />} allows={["USER", "ADMIN"]} />}
        >
          <Route index element={<HomeUser />} />
          <Route path="/user/map" element={<MapUser />} />
        </Route>

        <Route
          path="admin"
          element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
```

and last one

```jsx
const checkPermission = async () => {
  try {
    const res = await actionCurrentUser(token);
    const role = res.data.result.role;
    console.log(role);
    //   if (allows.includes(role)) {
    //     setOk(true);
    //   } else {
    //     setOk(false);
    //   }
    setOk(allows.includes(role));
  } catch (error) {
    setOk(false);
    console.log(error.response.data.message);
  }
};
```

## Step 21 Layoute admin

```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
```

and then

```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div
      className="flex bg-neutral-100 h-screen
    w-screen overflow-hidden"
    >
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default LayoutAdmin;
```

add color

```jsx
const Header = () => {
  return <div className="bg-green-950 h-12">Header</div>;
};
export default Header;
```

and layout.jsx

```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div
      className="flex h-screen
    w-screen"
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-2 m-2 border flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
```

and sidebar

```jsx
const Sidebar = () => {
  return <div className="bg-green-950 w-48">Sidebar</div>;
};
export default Sidebar;
```

and then

```jsx
import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      <div className="flex-1 py-4">
        <Link
          className="flex items-center hover:bg-green-700 hover:duration-200
          rounded-sm px-3 py-2 gap-2"
          to={"/admin"}
        >
          <span className="text-xl">
            <BookDashed />
          </span>
          Dashboard
        </Link>
      </div>
      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```

### Separate Link menu

utils/links.jsx

```jsx
import { CircleGauge, User2Icon } from "lucide-react";

export const sidbarLink = [
  { label: "Dashboard", link: "/admin", icon: <CircleGauge /> },
  { label: "Manage", link: "/admin/manage", icon: <User2Icon /> },
];
```

and sidebar

```jsx
import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";
import { sidbarLink } from "../../utils/links";

const Sidebar = () => {
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      {sidbarLink.map((item) => {
        return (
          <div className="py-1 mx-2">
            <Link
              className="flex items-center hover:bg-green-700 hover:duration-200
              rounded-sm px-3 py-1 gap-2"
              to={item.link}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </div>
        );
      })}

      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```

### Update Sidebar

/components/admin/Sidebar.jsx

```jsx
import { User } from "lucide-react";
import { Link } from "react-router";
import { sidbarLink } from "../../utils/links";
import useAuthStore from "../../store/auth-store";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User size={48} />
        <span className="text-lg">{user && user.email}</span>
        <span className="text-sm">{user && user.role}</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      {sidbarLink.map((item) => {
        return (
          <div className="py-1 mx-2">
            <Link
              className="flex items-center hover:bg-green-700 hover:duration-200
              rounded-sm px-3 py-1 gap-2"
              to={item.link}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </div>
        );
      })}

      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```

## Step 22 Logout

store/

```jsx
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionLogin } from "../../api/auth";

const authStore = (set) => ({
  user: [],
  token: null,
  actionLogin_: async (value) => {
    try {
      const res = await actionLogin(value);
      //   console.log(res.data.result);
      //   console.log(res.data.result.role);
      //   console.log(res.data.token);
      const { result, token } = res.data;
      set({ token: token, user: result });

      return { success: true, role: result.role };
    } catch (error) {
      //   console.log(error.response.data.message);
      return { success: false, error: error.response.data.message };
    }
  },
  actionLogout: () => {
    set({ user: [], token: null });
  },
});

const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
```

create components
/components/Logout.jsx

```jsx
import { useNavigate } from "react-router";
import useAuthStore from "../store/auth-store";
import { createAlert } from "../utils/createAlert";
const Logout = () => {
  // JS
  const navigate = useNavigate();
  const actionLogout = useAuthStore((state) => state.actionLogout);

  const hdlLogout = () => {
    // code body
    actionLogout();
    createAlert("success", "Logout Success");

    navigate("/login");
  };
  return (
    <div>
      <button className="hover:cursor-pointer" onClick={hdlLogout}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
```

and update Header.jsx

```jsx
import Logout from "../Logout";

const Header = () => {
  return (
    <div
      className="bg-green-950 h-12 flex 
    items-center text-white justify-end px-4"
    >
      <Logout />
    </div>
  );
};
export default Header;
```

## Step 23 Manage User

```jsx
const Manage = () => {
  // JS
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```

/api/user.jsx

```jsx
import axios from "axios";

export const actionListUsers = () => {
  return axios.get("http://localhost:8000/api/users");
};
```

update this code in
/pages/admin/Manage.jsx

```jsx
import { useEffect } from "react";
import { actionListUsers } from "../../../api/user";

const Manage = () => {
  // JS

  useEffect(() => {
    // code
    hdlFetchUsers();
  }, []);

  const hdlFetchUsers = async () => {
    try {
      const res = await actionListUsers();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```

missing token

and then

Manage.jsx

```jsx
import { useEffect } from "react";
import { actionListUsers } from "../../../api/user";
import useAuthStore from "../../store/auth-store";

const Manage = () => {
  // JS
  const token = useAuthStore((state) => state.token);
  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```

and
/api/user.jsx

```jsx
import axios from "axios";

export const actionListUsers = (token) => {
  return axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
```

and then
Manage.jsx

```jsx
import { useEffect, useState } from "react";
import { actionListUsers } from "../../../api/user";
import useAuthStore from "../../store/auth-store";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";

const Manage = () => {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Trash2 color="red" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```

## Step 24 Update role

and update Role
/api/user.jsx

```jsx
export const actionUpdateRole = (token, value) => {
  return axios.patch("http://localhost:8000/api/user/update-role", value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
```

and then

/admin/Manage.jsx

```jsx
import { useEffect, useState } from "react";
import { actionListUsers, actionUpdateRole } from "../../../api/user";
import useAuthStore from "../../store/auth-store";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";

const Manage = () => {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, { id, role });
      console.log(res);
      createAlert("success", res.data.message);
      hdlFetchUsers(token);
    } catch (error) {
      console.log(error);
      createAlert("success", error.response.data.message);
    }
  };

  // console.log(users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) =>
                      hdlUpdateRole(token, user.id, e.target.value)
                    }
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>
                <td>
                  <Trash2 color="red" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```

## Step 25 Delete User

/api/user.jsx

```jsx
export const actionDeleteUser = (token, id) => {
  return axios.delete("http://localhost:8000/api/user/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
```

and then
Manage.jsx

```jsx
import { useEffect, useState } from "react";
import {
  actionDeleteUser,
  actionListUsers,
  actionUpdateRole,
} from "../../../api/user";
import useAuthStore from "../../store/auth-store";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";
import Swal from "sweetalert2";

const Manage = () => {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, { id, role });
      console.log(res);
      createAlert("success", res.data.message);
      hdlFetchUsers(token);
    } catch (error) {
      console.log(error);
      createAlert("success", error.response.data.message);
    }
  };
  const hdlDeleteUser = async (token, id) => {
    try {
      console.log(id);
      Swal.fire({
        icon: "info",
        text: "Are you Sure?",
        showCloseButton: true,
        showCancelButton: true,
      }).then(async (data) => {
        // console.log(data.isConfirmed);
        if (data.isConfirmed) {
          const res = await actionDeleteUser(token, id);
          console.log(res);
          createAlert("success", res.data.message);
          hdlFetchUsers(token);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(users);
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) =>
                      hdlUpdateRole(token, user.id, e.target.value)
                    }
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>
                <td>
                  <Trash2
                    color="red"
                    onClick={() => hdlDeleteUser(token, user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```