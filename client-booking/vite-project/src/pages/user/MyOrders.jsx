import { listBookings } from "@/api/booking";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {Table,TableBody,TableCaption,TableCell,
  TableHead,TableHeader,TableRow,
} from "@/components/ui/table" //https://ui.shadcn.com/docs/components/table
import { formatDate, formatNumber } from "@/utils/Formats";
import BookingPDF from "@/components/booking/BookingPDF";

const MyOrders = () => { 
    //JS
    const [ Bookings, setBookings ] = useState();
    const { getToken } = useAuth();
    useEffect(()=>{    
      fetchBookings(); // following the pattern of other pages
    },[])
    const fetchBookings = async()=>{
     try {
      const token = await getToken();
      const res = await listBookings(token); // API call
      setBookings(res.data.result);  
     } catch (error) {
      console.log(error);
     }
    };
  return (
    <div>
      <h1 className="mt-2 text-xl mb-5"> My Orders: {Bookings?.length || 0}</h1>
      <div className="overflow-auto rounded-xl border bg-white shadow-sm">
        <Table className="min-w-[720px]">
          <TableCaption className="text-sm text-muted-foreground">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader className="sticky top-0 z-10 bg-gray-50/90 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60">
            <TableRow className="[&>th]:py-3 [&>th]:text-sm [&>th]:font-semibold [&>th]:text-gray-700">
              <TableHead className="w-20">ID</TableHead>
              <TableHead className="min-w-[180px] text-left">Name</TableHead>
              <TableHead className="w-28 text-center">Night</TableHead>
              <TableHead className="w-40 text-center">Check-in</TableHead>
              <TableHead className="w-40 text-center">Check-out</TableHead>
              <TableHead className="w-40 text-center">Total Charge</TableHead>
              <TableHead className="w-40 text-center">Invoice</TableHead>
            </TableRow>
          </TableHeader>
          {/* Table Body */}
            <TableBody>
              { Bookings?.map((item) => {
                const { id, totalNights, checkIn, checkOut, total } = item;
                const { title } = item.landmark ?? {};
                return (
                  <TableRow key={id}>
                    <TableCell className="font-mono text-xs text-gray-600">{id}</TableCell>
                    <TableCell className="truncate">{title}</TableCell>
                    <TableCell className="text-center tabular-nums">{totalNights}</TableCell>
                    <TableCell className="whitespace-nowrap text-center">{formatDate(checkIn)}</TableCell>
                    <TableCell className="whitespace-nowrap text-center">{formatDate(checkOut)}</TableCell>
                    <TableCell className="text-center font-medium tabular-nums">{formatNumber(total)}</TableCell>
                    <TableCell className="text-center font-medium tabular-nums">
                      <BookingPDF booking={item}/>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default MyOrders;