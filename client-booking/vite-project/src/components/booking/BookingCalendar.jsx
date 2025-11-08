import { Calendar } from "@/components/ui/calendar" 
import useBookingStore from "@/store/BookingStore";
import { useEffect, useState } from "react";


const defaultSelected = {
    from: undefined,
    to: undefined,
};


const BookingCalendar = () => {
    const [ range, setRange] = useState(defaultSelected);
    useEffect(()=>{
        useBookingStore.setState({ 
            range:range, // Update the range in the store ( Global State )
         }); 
    },[range]); // Only re-run the effect if range changes

  return (
    <div className="w-full max-w-md mx-auto">
        <Calendar
            mode='range'
            selected={ range }
            onSelect={ setRange }
            modifiersClassNames={{
            selected: "bg-gray-800 text-white hover:bg-gray-700 rounded-md border-black",
  }}
        />
        {/* {console.log('Selected date:', range)} */}
    </div>
  )
}
export default BookingCalendar;