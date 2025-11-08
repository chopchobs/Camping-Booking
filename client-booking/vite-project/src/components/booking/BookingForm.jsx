import { Card, CardTitle } from "../ui/card";
import { calTotal } from "@/utils/booking";
import { formatNumber } from "@/utils/Formats";
import BookingConfirm from "./BookingConfirm";
import useBookingStore from "@/store/BookingStore";

const BookingForm = () => {

    const price = useBookingStore((state) => state.price);
    const range = useBookingStore((state) => state.range);
    const checkIn = range?.from // from จากวันที่เลือก
    const checkOut = range?.to // to ถึงวันที่เลือก
  
   //calculator
   const result = calTotal(checkIn,checkOut,price);
  if(!range || !range.from || !range.to) return null;
  return (
    <div className="flex flex-col gap-4 overflow-visible">
      <Card className={"p-8 my-2"}>
        <CardTitle className="text-lg mb-4 ">Booking Summary</CardTitle>
        <p className="flex flex-col gap-2">
          <span className="font-semibold">Check-in: {`${checkIn}`}</span> 
          <span className="font-semibold">Check-out: {`${checkOut}`}</span> 
          <span className="font-semibold">Total Day: {`฿ ${formatNumber(price)} x ${result.totalNights} Days`} </span> 
          <span className="font-semibold">Total Price: {` ฿ ${formatNumber(result.totalPrices)}`} </span> 
        </p>
      </Card>
      <BookingConfirm/>
    </div>
  )
}
export default BookingForm; 