const express = require('express');
const cors = require('cors');       // CORS = Cross-Origin Resource Sharing  
const morgan = require('morgan');
const app = express();

//----- Middle Ware ----
app.use(cors());                    // ✅ เปิด CORS
app.use(express.json());            // ✅ parse JSON body อ่านนามสกุล JSON
app.use(morgan('dev'));             // ✅ log request, IP:address


const campingRoute = require('./routes/camping');   // ✅ นำเข้า routing module

app.use('/api', campingRoute );  // ✅ ใช้ routing module



// server start
const PORT = 4000;
app.listen( PORT,()=>console.log(`Server is running on port ${PORT}`));