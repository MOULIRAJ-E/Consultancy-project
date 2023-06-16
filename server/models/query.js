import mongoose from "mongoose";
const {Schema} =mongoose;
const querySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model("Query",querySchema)