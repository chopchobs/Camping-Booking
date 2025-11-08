import { z } from 'zod';
// กำหนด schema สำหรับการตรวจสอบข้อมูลฟอร์ม -  https://zod.dev/basics - schema
// campingSchema, profileSchema

// title, price, description, category, lat, lng, image
export const campingSchema = z.object({
    title: z.string().min(2,"Title must be at least 2 characters long")
    .max(100,"Title must be at most 100 characters long"),
    price: z.coerce.number()
    .min(0,"Price must be a positive number"),
    description: z.string()
    .min(10,"Description must be at least 10 characters long")
    .max(1000,"Description must be at most 200 characters long"),
    category: z.string().min(1,"Category is required"),
    lat: z.coerce.number()
    .refine((val) => !isNaN(val), { message: "Latitude is required" }),
    lng: z.coerce.number()
    .refine((val) => !isNaN(val), { message: "Longitude is required" }),
    image: z.any()
});
// firstname, lastname
export const profileSchema=z.object({
    firstname: z.string()
    .min(2,"FirstName must be at least 2 characters long")
    .max(80,"FirstName must be at most 80 characters long"),
    lastname: z.string()
    .min(2,"LastName must be at least 2 characters long")
    .max(80,"LastName must be at most 80 characters long"),
})

