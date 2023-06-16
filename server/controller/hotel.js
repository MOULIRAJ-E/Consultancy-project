import Hotel from "../models/addhotel.js"
export const addHotel=async(req,res,next)=>{
    try{

        const newHotel=new Hotel(req.body)
        await newHotel.save();
        res.status(200).send(newHotel); 
    }
    catch(err){
        next(err);
    }
}

export const getHotel=async(req,res,next)=>{
    const response=await Hotel.find({})
    console.log(response)
    if(response.length>=1){
        res.status(200).json({"msg":"sucess","data":response})
    }
    else{
        res.status(200).json({"msg":"failed"})
    }
}
