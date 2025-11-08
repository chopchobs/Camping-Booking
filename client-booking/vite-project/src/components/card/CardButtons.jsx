import { SignInButton } from '@clerk/clerk-react';
import { Heart, RotateCw } from 'lucide-react';

//  Submit
export const CardSubmitButtons = ({isPending,isFavorite}) => {
  return (
    <button>
      {
        isPending
        ? <RotateCw className='animate-spin'/>
        : isFavorite
        ? <Heart
        className='hover:scale-110 hover:duration-300' fill='red'
        fillOpacity='70%' size={26} stroke='whileHover'/>
        : <Heart
        className='hover:scale-110 hover:duration-300' fill='black'
        fillOpacity='70%' size={26} stroke='whileHover'/>
      }
    </button>
  )
}
// SignIn
export const CardSignInButtons = () => {
  return (
    <div>
      <SignInButton mode='modal'>
        <button>
          <Heart
          className='hover:scale-110 hover:duration-300' fill='black'
          fillOpacity='70%' size={26} stroke='whileHover'/>
        </button>
      </SignInButton>
    </div>
  )
}