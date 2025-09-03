	1. Express
	•	คือ Framework ของ Node.js
	•	ใช้สร้างเว็บเซิร์ฟเวอร์ หรือ API ได้ง่ายขึ้น
	•	ช่วยจัดการ routing (เส้นทางเช่น /users, /login) และ middleware ได้สะดวก
	
    2. CORS (Cross-Origin Resource Sharing)
	•	เป็น middleware สำหรับจัดการปัญหา cross-origin
	•	เวลาที่ frontend (เช่น React ที่ http://localhost:5173) จะดึงข้อมูลจาก backend (เช่น API ที่ http://localhost:3000)
	•	ถ้าไม่เปิด CORS → browser จะ block request

    3. Morgan
	•	เป็น HTTP request logger middleware
	•	ใช้ log request ที่เข้ามา เช่น method, path, status, response time
	•	ช่วย debug เวลา dev ได้ง่ายขึ้น

    4. Nodemon
	•	ไม่ได้อยู่ใน Flow ของ server โดยตรง แต่ช่วย developer
	•	เวลาเราแก้โค้ด server.js → Nodemon จะ restart server ให้อัตโนมัติ
	•	เราไม่ต้องกด stop/start เองทุกครั้ง
    
    •	Express → Framework สำหรับสร้างเว็บเซิร์ฟเวอร์/ API
	•	CORS → แก้ปัญหา cross-origin ระหว่าง frontend-backend
	•	Morgan → Logger เอาไว้ดู request/response ใน console
	•	Nodemon → Tool สำหรับ restart server อัตโนมัติเมื่อแก้โค้ด

	• CORS = กลไกที่ทำให้เว็บข้ามโดเมนไปเรียก resource ได้อย่างปลอดภัย
	•	ถ้าไม่เปิด → เบราว์เซอร์จะบล็อก
	•	ถ้าเปิด → ต้องกำหนดว่าจะให้ใคร (origin ไหน) เข้าถึงได้