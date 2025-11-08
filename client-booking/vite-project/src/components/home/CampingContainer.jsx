import MapHome from "@/components/map/MapHome";
import CampingLists from "./CampingLists";
import useCampingStore from "@/store/camping-store";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import CategoryList from "./CategoryList";
import { useSearchParams } from "react-router";

const CampingContainer = () => {
  //Zustand
    const actionListCamping  = useCampingStore((state)=>state.actionListCamping);
    const actionFilter  = useCampingStore((state)=>state.actionFilter);

  // useSearchParams
    const [searchParams,setSearchParams] = useSearchParams();

  //clerk
   const { user } = useUser();

  // all data id camping
   const id = user?.id ?? null;
    useEffect(() => {
      // code , || = first true , && = first false, ?? = nullish null or undefined --> Right
    },[user?.id]);
    
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    useEffect(()=>{
    // Logic
      if ( category || search ) {
        actionFilter(category, search);
      }else if(!category || !search){
        actionListCamping(id);
      }
    },[ category,search ]);
  return (
    <div> 
        {/* <CategoryList /> */}
        <MapHome />
        <CampingLists />
    </div>
  )
}
export default CampingContainer;