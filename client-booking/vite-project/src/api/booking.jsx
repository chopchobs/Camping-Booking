import axios from "axios";


// GET - listBookings
export const listBookings = async( token )=>{ 
    return await axios.get('http://localhost:4000/api/bookings',{ 
        headers:{
            Authorization: `Bearer ${token}`,// ✅ ไม่มีช่องว่าง
        }
    });
}

// POST - createBooking
export const createBooking = async( data,token )=>{ 
    return await axios.post('http://localhost:4000/api/booking',data,{ 
        headers:{
            Authorization: `Bearer ${token}`,// ✅ ไม่มีช่องว่าง
        }
    });
}

// POST - CheckOut
export const checkOut = async( id,token )=>{ 
    return await axios.post('http://localhost:4000/api/checkout',{id},{ 
        headers:{
            Authorization: `Bearer ${token}`,// ✅ ไม่มีช่องว่าง
        }
    });
}

// GET - CheckOutStatus
export const checkOutStatus = async( session,token )=>{ 
    return await axios.get(`http://localhost:4000/api/checkout-status/${session}`,{ 
        headers:{
            Authorization: `Bearer ${token}`,// ✅ ไม่มีช่องว่าง
        }
    });
}

