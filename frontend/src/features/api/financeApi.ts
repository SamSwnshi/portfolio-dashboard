import type { StockHolding } from "../../types/StockHolding";

interface PortfolioResponse {
  totals: {
    investment: number;
    presentValue: number;
    gainLoss: number;
  };
  holdings: StockHolding[];
}

export async function fetchPortfolio(): Promise<PortfolioResponse> {
  const baseUrl = import.meta.env.VITE_API_URL; 
  const response = await fetch(`${baseUrl}/api/portfolio`);
  if (!response.ok) {
    throw new Error("Failed to fetch portfolio");
  }
  const data: PortfolioResponse = await response.json();
  // console.log(data)
  return data;
}
