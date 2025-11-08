"use client"

import useBookingStore from "@/store/BookingStore";
import Buttons from "../form/Buttons"
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createBooking } from "@/api/booking";
import { useNavigate } from "react-router";

const BookingConfirm = () => {

    //zustand
    const range = useBookingStore((state)=>state.range);
    const checkIn = range?.from;
    const checkOut = range?.to;
    const campingId = useBookingStore((state)=>state.campingId);

    //clerk
    const { getToken,userId }=useAuth();
    
    //hook form
    const { handleSubmit, setValue, formState} = useForm();
    const { isSubmitting } = formState;

    //Navigate
    const navigate = useNavigate(); 

    if (!userId) {
        return (
            <div className="flex justify-center">
                <SignInButton mode='modal' className='w-full h-11 flex items-center 
                    justify-center gap-2 bg-black text-white'
                    forceRedirectUrl={`/user/camping/${campingId}`}
                    >
                    <Button>
                        Please, Sign In
                    </Button>
                </SignInButton>
            </div>
        )
    }
    
    useEffect(()=>{
      if(campingId) setValue('campingId',campingId)
        if(checkIn) setValue('checkIn',checkIn)
          if(checkOut) setValue('checkOut',checkOut)
    },[range]);
    const hldCamping = async (value)=>{
      await new Promise((resolve)=>setTimeout(resolve,1100))
      const token = await getToken()
      // console.log(token)

      //Send Back-End
      try {
        const res = await createBooking(value, token);// ✅ ส่ง data ก่อน token
        const bookingId = res.data.result;
        navigate(`/user/checkout/${bookingId}`); // เด้งไปจ่ายตัง 
      } catch (error) {
         console.log("Booking error:", error.response?.data || error.message);
      }
    }
  return (
    <div className="mt-2">
     <form onSubmit={ handleSubmit (hldCamping) }> 
       <Buttons text="Confirm Booking" isPending={isSubmitting}  />
     </form>
    </div>
  );
};
export default BookingConfirm;