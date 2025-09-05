export interface StockHolding {
  symbol: string;
  name: string;
  sector: string;
  qty: number;
  price: number;
  exchange: string;
  cmp?: number | null;
  peRatio?: number | null;
  earnings?: string | null;
  investment: number;
  presentValue: number;
  gainLoss: number;
}
