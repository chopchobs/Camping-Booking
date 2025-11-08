import { useAuth } from "@clerk/clerk-react";
import { Link } from "react-router";

const ProtectedRoute = ({el}) => {
  // JS
  const { isLoaded, isSignedIn } = useAuth();
  if(!isLoaded){
    return <h1>Loading....</h1>
  }
  if(!isSignedIn){
    return (
      <div className="flex w-full h-screen items-center justify-center
       text-3xl mt-20  font-bold text-red-600 flex-col gap-5">
        Access Denied. You are not authorized to view this page.
        <div className=" underline ">
          <Link to="/" > Go to Home!!</Link>
        </div>
      </div>
   )
  }
  return el;
}
export default ProtectedRoute;