import { useUser } from '@clerk/clerk-react';
import { CircleUserRound,  } from 'lucide-react';

const UserIcon = () => {
  const { user } = useUser();
  // console.log(user)
  if(user){
    return <img src={ user.imageUrl }
    className='w-6 h-6 rounded-full object-cover'
    />
  }
  return (
    <div>
      <CircleUserRound 
        className='w-6 h-6 rounded-full object-cover' 
        size={24}/>
    </div>
  )
}
export default UserIcon;