import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserKendaraan = new mongoose.Schema({
    namakendaraan: {
      type: String,
      required: [true, "Lengkapi Form untuk melanjutkan"],
    },
    nomorpolisi: {
      type: String,
      required: [true, "Lengkapi Form untuk melanjutkan"],
    },
    warna: {
        type: String,
        required: [true, "Lengkapi Form untuk melanjutkan"]
    }
});
  
export default mongoose.models.Kendaraan || mongoose.model("Kendaraan", UserKendaraan);
  
