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
import { Links } from "../../utils/Links";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUp, SignUpButton, UserButton } from '@clerk/clerk-react';
import SignOutLink from "./SignOutLink";


const DropsDownList = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      {/* บนขวา */}
       <Button variant='outline'>
         <AlignLeft />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <UserIcon />
          </SignedOut>
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            Links.map((item,index) => {
              return (
                <DropdownMenuItem key={index}>
                 <Link to={item.href}>
                   {item.label}
                 </Link>
                </DropdownMenuItem>
              )
            })}
          <DropdownMenuSeparator />

          {/* Not Logged In */}
          <SignedOut>
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
            <SignedIn>
              <DropdownMenuItem>
                <SignOutLink/>
              </DropdownMenuItem>
            </SignedIn>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropsDownList;