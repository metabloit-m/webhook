import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
        maxlength: [30, "Item name cannot exceed 30 characters"]
    },
    price: {
        type: Number,
        // required: true,
    },
    purchase_date: {
        type: String,
        default: new Date()
        // required: true,
    },
    balance: {
        type: Number,
        // required: true
    },
    url: {
        type: String
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);