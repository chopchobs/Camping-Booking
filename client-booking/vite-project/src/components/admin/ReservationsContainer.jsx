// copy from StateContainer.jsx 
import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { listReservations } from "@/api/admin";

const ReservationsContainer = () => {
    // JS
    //clerk
    const { getToken } = useAuth();
    const [data , setData] =useState();
    useEffect(()=>{
        fetchStats();
    },[])
        const fetchStats = async ()=>{
            //code body
            const token = await getToken()
        try {
            const res = await listReservations(token);
            // console.log('Count:',res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    } 
  return (
  <>
    <h1 className="text-4xl font-bold text-center mt-5 mb-5"> Reservations Overview</h1>
    <div className="mt-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2">
       <StateCard label="Camping" value={ data?.campings || 0 }/>
       <StateCard label="Nights" value={ data?.nights || 0}/>
       <StateCard label="Totals" value={ data?.totals || 0}/>
    </div>
  </>
  )
}
export default ReservationsContainer;

