const calNight = (checkIn,checkOut)=>{
  const milliDay = checkOut.getTime()-checkIn.getTime()
  // milli 1000 = (1 second = minuet = hour = day) | ( 1000 * 60 * 60 * 24)
  const day = ( 1000 * 60 * 60 * 24)
  const diffday = milliDay / (day)
  return diffday;
}

exports.calTotal = (checkIn,checkOut,price)=>{
  if (!checkIn || !checkOut) return
  // แปลงเป็น date object
   const checkInDate = new Date(checkIn)
   const checkOutDate = new Date(checkOut)
   // คำนวณคืน
    const totalNights = calNight(checkInDate,checkOutDate);
    // คำนวณราคารวม
    const totalPrices = totalNights*price;
    return {totalNights,totalPrices};
}