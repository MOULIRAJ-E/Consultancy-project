import Booking from "../models/booking.js";
export const createBook=async(req,res,next)=>{
    const newBook=new Booking(req.body);
    try{
        const savedBook=await newBook.save()
        res.status(200).json(savedBook);
    }
    catch(err){
        next(err);
    }
}

export const getBook=async(req,res,next)=>{
    const response=await Booking.find({})
    if(response.length>=1){
        res.status(200).json({"msg":"sucess","data":response})
    }
    else{
        res.status(200).json({"msg":"failed"})
    }
}