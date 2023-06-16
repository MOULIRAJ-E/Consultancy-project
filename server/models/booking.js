import mongoose from 'mongoose';
const { Schema } = mongoose;
const BookingSchema=new Schema({
    eventType:{
        type:String,
        required:true,
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type: String,
        required:true
    },
    capacity:{
        type:String,
        required:true
    },
    dining:{
        type:String,
        required:false
    },
    extraAssistance:{
        type:String,
        required:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
export default mongoose.model("bookings",BookingSchema);