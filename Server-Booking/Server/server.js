const express = require('express');
const cors = require('cors');       // CORS = Cross-Origin Resource Sharing  
const morgan = require('morgan');
const {readdirSync}=require('fs');
require('dotenv/config')

const { clerkMiddleware } = require('@clerk/express')
const handleError = require('./middlewares/error');

const app = express();

// ✅ Clerk ต้องอยู่ก่อน middleware อื่น ๆ
app.use(clerkMiddleware());

// ✅ ตามด้วย middleware อื่น ๆ
app.use(cors());                             // ✅ เปิด CORS
app.use(express.json( { limit:"10mb" } ));   // ✅ parse JSON body อ่านนามสกุล JSON, กำหนดรูป 10MB
app.use(morgan('dev'));                      // ✅ log request, IP:address

// ✅ โหลดทุก route หลังจาก Clerk ถูก apply แล้ว
readdirSync('./routes')
  .map((r) => app.use ( '/api',require( './routes/'+ r )))

// Middleware - send Error
app.use(handleError);

// server start
const PORT = 4000;
app.listen( PORT,()=>console.log(`Server is running on port ${PORT}`));