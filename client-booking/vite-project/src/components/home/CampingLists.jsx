import CampingCard from "../card/CampingCard";
import useCampingStore from "@/store/camping-store";
import EmptyList from "./EmptyList";


const CampingLists = () => {
    //Zustand 
  const campings = useCampingStore((state)=>state.campings);
//   console.log('campings',campings.length)
  if(campings.length === 0){
    return<div>
        <EmptyList/>
    </div>
  }
  return <section className="grid grid-cols-1 sm:grid-cols-2 
  md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
       {
        campings.map((item)=>{
            return <CampingCard 
            key={item.id} 
            camping={item}
            />
        })
       }
    </section>
}
export default CampingLists;