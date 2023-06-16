import mongoose from "mongoose";
const {Schema}=mongoose;
const hotelSchema=new Schema({
    hotel_name:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
        unique:true
    },
    distance:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        requrired:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},{timestamps:true});


export default mongoose.model("Hotel",hotelSchema);