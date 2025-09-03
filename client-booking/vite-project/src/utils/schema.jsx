import { z } from 'zod';

// https://zod.dev/basics - schema
export const campingSchema = z.object({
    title: z.string().min(2,"Title must be at least 2 characters long").max(100,"Title must be at most 100 characters long"),
    // coerce ให้เป็น number
    price: z.coerce.number().min(0,"Price must be a positive number"),
    description: z.string().min(10,"Description must be at least 10 characters long").max(200,"Description must be at most 200 characters long"),
    category: z.string().min(1,"Category is required"),
    // transform(() => parseFloat()) - Zod จะเอาค่า string มา แปลงเป็น number
    lat: z.string().min(1,"Latitude is required").transform((lat) => parseFloat(lat)),
    lng: z.string().min(1,"Longitude is required").transform((lng) => parseFloat(lng)),
});

