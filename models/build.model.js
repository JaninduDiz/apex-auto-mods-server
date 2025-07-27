import mongoose from "mongoose";

const buildSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    carModel: { type: String, required: true },
    color: { type: String, required: true },
    wheelColor: { type: String, required: false },
    selectedParts: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Build', buildSchema);

