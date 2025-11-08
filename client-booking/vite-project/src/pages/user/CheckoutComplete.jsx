import { checkOutStatus } from "@/api/booking";
import { CreateAlert } from "@/utils/Alert";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

const CheckoutComplete = () => {
  const navigate = useNavigate();
  const { session } = useParams();
  const { getToken }  = useAuth();
  const [ status,setStatus ] = useState(null)

  useEffect(()=>{
    fetchPayment()
  },[])
    
  const fetchPayment = async()=>{
    const token = await getToken();
    try {
      const res = await checkOutStatus( session,token );
      setStatus(res.data.status);   
      CreateAlert('success',res.data.message)   
      navigate('/user/myorders')
    } catch (error) {
      console.log(error)
    }
  } 
  // check or What will be given next? 
  if ( status === 'open') {
    return <Navigate to='/'/>
  }

  return (
    //หาอะไรมาทำเอง
    <div>Loading...</div>
  )
}
export default CheckoutComplete;