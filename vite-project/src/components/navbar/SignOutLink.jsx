import { SignOutButton, UserButton } from "@clerk/clerk-react";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleSignOut = () => {
    // setTimeout(() => {{}}, 1000);
        toast.success('NOTIFICATION!',
         { description: "Logout Successful!" });
  };

  return (
    <div>
      {/* <UserButton /> */}
      <SignOutButton redirectUrl="/">
        <button onClick={handleSignOut}>
          Logout
        </button>
      </SignOutButton>
    </div>
  );
};
export default SignOutLink;
