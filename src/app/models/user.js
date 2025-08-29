import mongoose from 'mongoose';
 
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    div:{
        type:String,
        required:true
    }
})
export const User = mongoose.models.User || mongoose.model('User', userschema);