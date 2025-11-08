import numeral from "numeral"
import moment from "moment";

// เครื่องหมาย , 
export const formatNumber = (number)=>{
    return numeral(number).format('0,0');
};

//  adjust DATE  ,https://momentjs.com/
export const formatDate = (date)=>{
    return moment(date).format('LL');
}