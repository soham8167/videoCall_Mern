import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  status:{
    type:String,
    default:"Inactive"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




export const User = mongoose.model("user", userSchema);
