import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserDriver = new mongoose.Schema({
    nama: {
      type: String,
      required: [true, "Please provide a Name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an Email"],
    },
    kota: {
        type: String,
        required: [true, "Please provide a password"]
    }
});
  
export default mongoose.models.Driver || mongoose.model("Driver", UserDriver);
  