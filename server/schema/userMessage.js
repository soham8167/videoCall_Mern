// import mongoose from "mongoose";


// const userMessage= mongoose.Schema({
//   name:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true
//   },
//   mesaage:{
//     type:String,
//     required:true
//   },
//   messageTime: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export const Message = mongoose.model("message", userMessage);

import mongoose from "mongoose";

const userMessage = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messageTime: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model("message", userMessage);
