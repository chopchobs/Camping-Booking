const express = require('express');
const cors = require('cors');       // CORS = Cross-Origin Resource Sharing  
const morgan = require('morgan');
const app = express();
const {readdirSync}=require('fs');
const handleError = require('./middlewares/error');

require('dotenv/config')
const {clerkMiddleware} = require('@clerk/express')




//----- Middle Ware ----
app.use(cors());                    // ✅ เปิด CORS
app.use(express.json());            // ✅ parse JSON body อ่านนามสกุล JSON
app.use(morgan('dev'));             // ✅ log request, IP:address
app.use(clerkMiddleware())

// God :)
readdirSync('./routes')
  .map((r) => app.use ( '/api',require( './routes/'+ r )))

// Middleware - send Error
app.use( handleError );
   


// server start
const PORT = 4000;
app.listen( PORT,()=>console.log(`Server is running on port ${PORT}`));