import express from "express";
import { addHotel,getHotel } from "../controller/hotel.js";
const router=express.Router();
router.post("/hotel",addHotel);
router.get("/gethotel",getHotel);
export default router