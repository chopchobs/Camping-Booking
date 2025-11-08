# 🏕️ Camping Booking Platform

เว็บแอปพลิเคชันสำหรับการจองพื้นที่แคมป์ปิ้งแบบครบวงจร  
ผู้ใช้สามารถค้นหาสถานที่, จองค่ายพัก, เพิ่มรายการโปรด และจัดการข้อมูลส่วนตัวได้ในที่เดียว

---

## 🚀 Tech Stack

### 🖥️ Frontend (Client)
- **Framework:** React + Vite
- **Router:** React Router DOM
- **State Management:** Zustand
- **UI:** Tailwind CSS + Shadcn/UI
- **Map:** Leaflet + React-Leaflet
- **Authentication:** Clerk
- **Cloud Storage:** Cloudinary
- **Build Tool:** Vite

### ⚙️ Backend (Server)
- **Framework:** Express.js (Node.js)
- **Database ORM:** Prisma
- **Database:** MySQL
- **Auth Middleware:** Clerk API
- **Image Upload:** Cloudinary SDK
- **Error Handling:** Custom Middleware
- **Hosting:** Render / Railway / Vercel

---

## 🧭 Features

| หมวดหมู่ | รายละเอียด |
|-----------|-------------|
| 🔐 Authentication | ลงทะเบียน / เข้าสู่ระบบ ด้วย Clerk |
| 🗺️ Map Integration | แสดงตำแหน่งแคมป์ปิ้งบนแผนที่ (Leaflet) |
| 💬 Review & Description | รายละเอียดสถานที่พร้อมภาพประกอบ |
| ❤️ Favorite System | บันทึกที่ชื่นชอบ |
| 🛒 Booking System | จองพื้นที่, ดูการจองย้อนหลัง |
| 🧑‍💼 Admin Panel | จัดการข้อมูลสถานที่, การจอง, ผู้ใช้ |
| 📦 Upload Image | อัปโหลดภาพผ่าน Cloudinary |
| 📱 Responsive UI | รองรับการแสดงผลทุกอุปกรณ์ |

---

## 🧩 Folder Structure

```
Camping-Booking/
├── Server-Booking/         # Backend (Node + Express + Prisma)
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── prisma/
│   ├── utils/
│   └── server.js
│
├── client-booking/         # Frontend (React + Vite)
│   ├── vite-project/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── store/
│   │   │   └── utils/
│   │   └── public/
│   └── package.json
│
└── README.md
```

---

## 🧪 Installation & Setup

### 1️⃣ Clone Repo
```bash
git clone https://github.com/yourusername/Camping-Booking.git
cd Camping-Booking
```

### 2️⃣ Install Dependencies
#### Backend
```bash
cd Server-Booking/Server
npm install
```

#### Frontend
```bash
cd client-booking/vite-project
npm install
```

### 3️⃣ Setup Environment Variables
สร้างไฟล์ `.env` ในแต่ละส่วน แล้วใส่ค่าเช่น:

#### Server
```env
DATABASE_URL="mysql://user:password@localhost:3306/bookingdb"
CLERK_SECRET_KEY="..."
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

#### Client
```env
VITE_CLERK_PUBLISHABLE_KEY="..."
VITE_API_URL="http://localhost:5000"
```

---

## 🧑‍💻 Development

### Run Backend
```bash
cd Server-Booking/Server
npm run server
```

### Run Frontend
```bash
cd client-booking/vite-project
npm run dev
```

---

## 📸 Preview

| หน้า | ตัวอย่าง |
|------|-----------|
| 🏠 หน้าแรก | แสดงรายการแคมป์ทั้งหมด พร้อมหมวดหมู่ |
| 🧭 แผนที่ | แสดงพิกัดจริงของสถานที่ |
| 💕 My Favorites | รวมที่ชื่นชอบ |
| 🧾 Booking | จัดการการจองของผู้ใช้ |
| ⚙️ Admin Panel | สำหรับผู้ดูแลระบบ |

---

## 📜 License
This project is for personal portfolio and learning purposes only.  
© 2025 ChopChobs
