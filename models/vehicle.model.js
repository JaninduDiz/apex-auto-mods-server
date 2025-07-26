import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    make: { type: String, required: true },
    carModel: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: Number, required: true },
    odoRead: { type: String, required: true }
});
export default mongoose.model('Vehicle', vehicleSchema);
