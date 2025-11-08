import { useForm } from "react-hook-form";
import { CardSignInButtons, CardSubmitButtons } from "./CardButtons";
import useCampingStore from "@/store/camping-store";
import { useAuth } from "@clerk/clerk-react";
import { CreateNotify } from "@/utils/Alert";

const FavoriteToggleButton = ({campingId,isFavorite}) => {
  // clerk
   const { getToken,isSignedIn } = useAuth();
  // Hook-form
    const { handleSubmit ,formState}= useForm();
    const { isSubmitting  } = formState
  // Zustand
   const actionAddorRemoveFavorite = useCampingStore(
    (state)=>state.actionAddorRemoveFavorite);
   const hldSubmit = async()=>{
     await new Promise (( resolve )=> setTimeout ( resolve, 2000 ));
      const token = await getToken();
      const res = await actionAddorRemoveFavorite({ campingId, isFavorite },token);
      // console.log('res:',res)
      if (res.success) {
        CreateNotify('success',res.message)
      }else{
        CreateNotify('error',res.message)
      }
  };
    if(!isSignedIn){
      return <CardSignInButtons/>
    };
  return (
    <form onSubmit={ handleSubmit ( hldSubmit ) }>
     <CardSubmitButtons 
      isPending={ isSubmitting } 
      isFavorite={ isFavorite }/>
    </form>
  )
}
export default FavoriteToggleButton;