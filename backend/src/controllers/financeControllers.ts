import { Request, Response } from "express";
import HoldingModel from "../models/holding.model.js";
import { getQuote } from "../services/yahooService.js";

export async function getPortfolio(req: Request, res: Response) {
  try {
    // Fetch holdings from MongoDB
    const holdings = await HoldingModel.find().lean();

    const enriched = await Promise.all(
      holdings.map(async (h) => {
        const q = await getQuote(h.symbol);

        const cmp = (q?.regularMarketPrice as number | undefined) ?? null;
        const name = (q?.shortName as string | undefined) ?? h.name ?? null;
        const exchange = (q?.exchange as string | undefined) ?? h.exchange ?? null;
        const peRatio = (q?.trailingPE as number | undefined) ?? null;
        const latestEarnings = (q?.epsTrailingTwelveMonths as number | undefined) ?? null;

        const investment = h.purchasePrice * h.qty;
        const presentValue = cmp ? cmp * h.qty : investment;
        const gainLoss = presentValue - investment;

        return {
          symbol: h.symbol,
          name,
          qty: h.qty,
          purchasePrice: h.purchasePrice,
          investment,
          cmp,
          presentValue,
          gainLoss,
          peRatio,
          latestEarnings,
          exchange,
          sector: h.sector ?? "Unknown",
        };
      })
    );

    const totalInvestment = enriched.reduce((s, e) => s + (e.investment ?? 0), 0);
    const totalPresentValue = enriched.reduce((s, e) => s + (e.presentValue ?? 0), 0);
    const totalGainLoss = totalPresentValue - totalInvestment;

    return res.json({
      totals: {
        investment: totalInvestment,
        presentValue: totalPresentValue,
        gainLoss: totalGainLoss,
      },
      holdings: enriched,
    });
  } catch (err) {
    console.error("getPortfolio error:", err);
    return res.status(500).json({ error: "Failed to fetch portfolio" });
  }
}
