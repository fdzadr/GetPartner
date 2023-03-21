import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
import Driver from './Driver';
  
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
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId, ref: 'Driver'
    }
});
  
export default mongoose.models.Kendaraan || mongoose.model('Kendaraan', UserKendaraan);
  
