import mongoose from "mongoose";
import dotenv from "dotenv";
import HoldingModel from "./models/holding.model.js";
import yahooFinance from "yahoo-finance2";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";

const symbols = [
  "AAPL",
  "TSLA",
  "AMZN",
  "RELIANCE.NS",
  "TCS.NS",
  "HDFCBANK.NS",
  "INFY.NS",
  "MSFT",
  "GOOGL",
  "META",
  "NFLX",
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await HoldingModel.deleteMany({});

    const holdings = [];

    for (const symbol of symbols) {
      try {
        const q = await yahooFinance.quote(symbol);

        holdings.push({
          symbol,
          qty: Math.floor(Math.random() * 50) + 5, // random quantity
          purchasePrice: q?.regularMarketPreviousClose ?? 100,
          sector: q?.sector ?? "Unknown",
          name: q?.shortName ?? symbol,
          exchange: q?.fullExchangeName ?? "Unknown",
        });
      } catch (err) {
        console.error(`⚠️ Failed fetching ${symbol}`, err);
      }
    }

    await HoldingModel.insertMany(holdings);
    console.log(`✅ Seeded ${holdings.length} stocks successfully`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();
