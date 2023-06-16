import express from "express";
import { contact } from "../controller/cont.js";
const router=express.Router();
router.post("/query",contact);
export default router