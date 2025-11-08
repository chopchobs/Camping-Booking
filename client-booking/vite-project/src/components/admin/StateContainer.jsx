import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { listStats } from "@/api/admin";

const StateContainer = () => {
    // JS
    //clerk
    const { getToken } = useAuth();
    const [ data , setData ] =useState();
    useEffect(()=>{
        fetchStats();
    },[])
        const fetchStats = async ()=>{
            //code body
            const token =await getToken()
        try {
            const res = await listStats(token);
            console.log('Count:',res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <div className="mt-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2">
       <StateCard label="User" value={ data?.usersCount || 0 }/>
       <StateCard label="Campings" value={data?.campingCount || 0}/>
       <StateCard label="Bookings" value={data?.bookingCount || 0}/>
    </div>
  )
}
export default StateContainer;