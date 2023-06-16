import express from "express";
import { createBook,getBook } from "../controller/book.js";

const router=express.Router();
router.post("/",createBook);
router.get("/getbooking",getBook);
export default router