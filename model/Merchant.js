import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserMerchant = new mongoose.Schema({
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
        required: [true, "Please provide a password"],
        enum: {values: ['Pilih Kota'],message: "Required"}
    }
});
  
export default mongoose.models.Merchant || mongoose.model("Merchant", UserMerchant);
  
