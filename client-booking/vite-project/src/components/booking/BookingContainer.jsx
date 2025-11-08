import { useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import BookingForm from "./BookingForm";
import useBookingStore from "@/store/BookingStore";

const BookingContainer = ({campingId, price, booking}) => {
    // console.log('campingId:', campingId);
    // console.log('price:', price);
    // console.log('booking:', booking); 
    
    useEffect(() => {
       // Perform any side effects or data fetching here
         useBookingStore.setState({ 
            campingId, 
            price, 
            booking 
        });
    }, [ campingId ]); // Only re-run the effect if campingId changes
    
  return (
    <div className="space-y-4">
        <BookingCalendar />
        <BookingForm />
    </div>
  )
}
export default BookingContainer;