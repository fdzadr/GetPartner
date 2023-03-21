import { Schema,model,models, SchemaType } from 'mongoose'
import mongoose from 'mongoose';
  
const UserDriver = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
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
      required: [true, "Please provide a City"]
    },
});
  
export default mongoose.models.Driver || mongoose.model('Driver', UserDriver);
  