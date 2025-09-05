import React from "react";
import type { StockHolding } from "../../types/StockHolding";

interface Props {
  data: StockHolding[];
}

const PortfolioTable: React.FC<Props> = ({ data }) => {
  const totalInvestment = data.reduce((sum, stock) => sum + stock.investment, 0);

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-800 text-gray-200 uppercase text-xs">
          <tr>
            <th className="px-4 py-2 text-left">Stock Name</th>
            <th className="px-4 py-2 text-right">Purchase Price</th>
            <th className="px-4 py-2 text-right">Quantity</th>
            <th className="px-4 py-2 text-right">Investment</th>
            <th className="px-4 py-2 text-right">Portfolio %</th>
            <th className="px-4 py-2 text-center">Exchange</th>
            <th className="px-4 py-2 text-right">CMP</th>
            <th className="px-4 py-2 text-right">Present Value</th>
            <th className="px-4 py-2 text-right">Gain/Loss</th>
            <th className="px-4 py-2 text-right">P/E Ratio</th>
            <th className="px-4 py-2 text-right">Latest Earnings</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-900 text-gray-100">
          {data.map((stock, idx) => {
            const portfolioPercent =
              totalInvestment > 0
                ? (stock.investment / totalInvestment) * 100
                : 0;

            return (
              <tr
                key={idx}
                className="hover:bg-gray-800 transition-colors duration-150"
              >
                <td className="px-4 py-2">{stock.name ?? stock.symbol}</td>
                <td className="px-4 py-2 text-right">{stock.purchasePrice}</td>
                <td className="px-4 py-2 text-right">{stock.qty}</td>
                <td className="px-4 py-2 text-right">{stock.investment.toFixed(2)}</td>
                <td className="px-4 py-2 text-right">
                  {portfolioPercent.toFixed(2)}%
                </td>
                <td className="px-4 py-2 text-center">{stock.exchange ?? "N/A"}</td>
                <td className="px-4 py-2 text-right">
                  {stock.cmp != null ? stock.cmp.toFixed(2) : "N/A"}
                </td>
                <td className="px-4 py-2 text-right">
                  {stock.presentValue.toFixed(2)}
                </td>
                <td
                  className={`px-4 py-2 text-right font-semibold ${
                    stock.gainLoss >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stock.gainLoss.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-right">
                  {stock.peRatio != null ? stock.peRatio.toFixed(2) : "N/A"}
                </td>
                <td className="px-4 py-2 text-right">
                  {stock.earnings ?? "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 p-2">
        Disclaimer: Data is updated in real-time using unofficial sources and may periodically be inaccurate or unavailable.
      </p>
    </div>
  );
};

export default PortfolioTable;
