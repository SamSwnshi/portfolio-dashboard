import mongoose, { Schema, Document } from "mongoose";

export interface IHolding extends Document {
    symbol: string;
    qty: number;
    purchasePrice: number;
    sector?: string;
    name?: string;
    exchange?: string;
}

const HoldingSchema = new Schema<IHolding>({
    symbol: { type: String, required: true, uppercase: true, trim: true },
    qty: { type: Number, required: true, min: 0 },
    purchasePrice: { type: Number, required: true, min: 0 },
    sector: { type: String },
    name: { type: String },
    exchange: { type: String },
});

export default mongoose.model<IHolding>("Holding", HoldingSchema);
