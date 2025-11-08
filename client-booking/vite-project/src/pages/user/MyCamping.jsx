import { listMyCampings } from "@/api/admin";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table" 
import { formatNumber } from "@/utils/Formats";

const MyCamping = () => { 
    //JS
    const [ MyCampings, setMyCampings ] = useState();
    const { getToken } = useAuth();
    useEffect(()=>{    
        fetchMyCampings();
    },[])
    const fetchMyCampings = async()=>{
     try {
        const token = await getToken();
        const res = await listMyCampings(token);
        setMyCampings(res.data.result);
     } catch (error) {
        console.log(error)
     }
    };
  return (
    <div>
      <h1 className="mt-2 text-xl mb-5"> My Campings: {MyCampings?.length || 0}</h1>
      <div className="overflow-x-auto">
        <Table className="min-w-[720px]">
          <TableCaption className="text-sm text-muted-foreground">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow className="text-xs text-gray-500">
              <TableHead className="w-20">Camping No.</TableHead>
              <TableHead className="min-w-[180px] text-center">Name of Campings</TableHead>
              <TableHead className="w-28 text-center">Price / Day</TableHead>
            </TableRow>
          </TableHeader>
            <TableBody>
              { MyCampings?.map((item) => {
                const { id, title, price } = item;
                return (
                  <TableRow key={id} className="[&>td]:py-2 [&>td]:text-sm hover:bg-gray-50">
                    <TableCell className="font-mono text-xs text-gray-600 text-center">{id}</TableCell>
                    <TableCell className="truncate text-center">{title}</TableCell>
                    <TableCell className="text-center tabular-nums">{formatNumber(price)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default MyCamping;