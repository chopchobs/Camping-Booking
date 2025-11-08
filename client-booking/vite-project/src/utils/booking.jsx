const calNight = (checkIn,checkOut)=>{
  const milliDay = checkOut.getTime()-checkIn.getTime()
  // milli 1000 = (1 second = minuet = hour = day) | ( 1000 * 60 * 60 * 24)
  const day = ( 1000 * 60 * 60 * 24)
  const diffday = milliDay / (day)
  return diffday;
}

export const calTotal = (checkIn,checkOut,price)=>{
  if (!checkIn || !checkOut) return
    const totalNights = calNight(checkIn,checkOut);
    const totalPrices = totalNights*price;
    return {totalNights,totalPrices};
}