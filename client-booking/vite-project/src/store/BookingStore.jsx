//Global 
import { create } from "zustand";

const bookingStore =()=>({
    campingId:"",
    price:0,
    booking:[],
    range:undefined,
})

const useBookingStore = create(bookingStore)
export default useBookingStore;