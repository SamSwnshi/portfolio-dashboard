import yahooFinance from "yahoo-finance2";

/**
 * Fetch stock quote from Yahoo Finance
 */
export async function getQuote(symbol: string) {
  try {
    const quote = await yahooFinance.quote(symbol);
    
    return quote;
  } catch (error) {
    console.error(`Yahoo Finance fetch error for ${symbol}:`, error);
    return null;
  }
}
