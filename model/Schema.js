import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserSchema = new mongoose.Schema({
    phonenumber: {
      type: String,
      required: [true, "Please provide a Phone Number"],
      unique:true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: [8, "Must be greater then 8 and less then 20 characters long"],
      max: [20, "Must be greater then 8 and less then 20 characters long"],
    },
    cpassword: {
        type: String,
        required: [true, "Please provide a password"]
    },
});
  
export default mongoose.models.Schema || mongoose.model("Schema", UserSchema);
  

/*
const usersSchema=new Schema({
    email:String,
    password:String,
    cpassword:String
})

const Users = models.users || model('users', usersSchema)

export default Users;
*/