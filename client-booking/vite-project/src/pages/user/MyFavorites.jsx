import CampingCard from "@/components/card/CampingCard";
import useCampingStore from "@/store/camping-store"
import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"

const Myfavorites = () => {
    // clerk 
    const { getToken } = useAuth();
    
    // Zustand 
    const actionListFavorite = useCampingStore((state)=>state.actionListFavorite)
    const favorites = useCampingStore((state)=>state.favorites)

    // on load
    useEffect(()=>{
        fetchListFavorite(); // following favorites
    },[]);

    const fetchListFavorite = async()=>{
        //code body
        const token = await getToken() // get token from clerk
        actionListFavorite(token); // fetch favorites
    };
  return(
    <section className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        { favorites.map((item)=>{
          return <CampingCard key={item.id} camping={item.landmark}/>
         })
        }
      </section>
  );
};
export default Myfavorites;