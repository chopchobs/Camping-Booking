import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { publicLinks ,privateLinks } from "../../utils/Links";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, SignOutButton, 
  SignUp, SignUpButton, UserButton } from '@clerk/clerk-react';
import SignOutLink from "./SignOutLink";


const DropsDownList = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
      {/* บนขวา */}
       <Button variant='outline' className="rounded-full">
         <AlignLeft />
          <SignedIn>
            <UserIcon />
          </SignedIn>
          <SignedOut>
            <UserIcon />
          </SignedOut>
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white rounded-md" >
          <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-200"/>
          {
            publicLinks.map((item,index) => {
              return (
                <DropdownMenuItem key={index}>
                 <Link to={item.href}>
                   {item.label}
                 </Link>
                </DropdownMenuItem>
              );
            })}
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-200"/>

          {/* Not Logged In */}
          <SignedOut className="flex flex-col gap-2 px-2">
            <DropdownMenuItem>
              <SignInButton mode='modal'>
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton mode='modal'>
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {/* Logged In */}
            <SignedIn className="flex flex-col gap-2 px-2">
            {
            privateLinks.map((item,index) => {
              return (
                <DropdownMenuItem key={index}>
                 <Link to={item.href}>
                   {item.label}
                 </Link>
                </DropdownMenuItem>
              );
            })}
              <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-200" />
              <DropdownMenuItem>
                <SignOutLink/>
              </DropdownMenuItem>
            </SignedIn>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropsDownList;