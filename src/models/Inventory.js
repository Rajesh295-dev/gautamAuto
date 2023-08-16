import mongoose from "mongoose";
const { Schema } = mongoose;

const InventorySchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
            maxlength: 60,
        },

        img: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxpower: {
            type: Number,
            required: true,
        },
        mph: {
            type: Number,
            required: true,
        },
        speed: {
            type: Number,
            required: true,
        },
        cat: {
            type: String,
            required: true,
            maxlength: 30,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 60,
        },
        username: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

export default mongoose.models.Inventory ||
    mongoose.model("Inventory", InventorySchema);