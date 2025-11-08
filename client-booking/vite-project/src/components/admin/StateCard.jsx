import { Card, CardHeader } from "../ui/card"
import { formatNumber } from "@/utils/Formats";

const StateCard = ({label,value}) => {
  return (
    <div>
     <Card>
        <CardHeader className="flex flex-row 
        justify-between items-center">
         <h1 className="text-4xl
          font-semibold">{label}</h1>
         <span className="text-4xl 
         font-extrabold">{formatNumber(value)}</span>
        </CardHeader>
     </Card>
    </div>
  )
}
export default StateCard;