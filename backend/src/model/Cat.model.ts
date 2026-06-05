import mongoose from "mongoose";
import type { ICat } from "../types/cat.types.ts";

const catSchema = new mongoose.Schema<ICat>({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    kidsFriendly: {
        type: Boolean,
        required: true,
        default: true
    },
    apartmentFriendly: {
        type: Boolean,
        required: true
    },
    lifeSpan: {
        type: Number,
        required: true
    },
    energyLevel: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, { timestamps: true });

const catModel = mongoose.model("Cat", catSchema);

export default catModel