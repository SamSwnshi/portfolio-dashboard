import React from "react";
import type { StockHolding } from "../../types/StockHolding";

interface Props {
  data: StockHolding[];
}

const PortfolioTable: React.FC<Props> = ({ data }) => {
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
          {data.map((stock, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-800 transition-colors duration-150"
            >
              <td className="px-4 py-2">{stock.name ?? stock.symbol}</td>
              <td className="px-4 py-2 text-right">{stock.purchasePrice.toFixed(2)}</td>
              <td className="px-4 py-2 text-right">{stock.qty}</td>
              <td className="px-4 py-2 text-right">{stock.investment.toFixed(2)}</td>
              <td className="px-4 py-2 text-right">{stock.portfolioPercent?.toFixed(2)}%</td>
              <td className="px-4 py-2 text-center">{stock.exchange ?? "N/A"}</td>
              <td className="px-4 py-2 text-right">{stock.cmp?.toFixed(2) ?? "N/A"}</td>
              <td className="px-4 py-2 text-right">{stock.presentValue?.toFixed(2) ?? "N/A"}</td>
              <td
                className={`px-4 py-2 text-right font-semibold ${
                  (stock.gainLoss ?? 0) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stock.gainLoss?.toFixed(2) ?? "N/A"}
              </td>
              <td className="px-4 py-2 text-right">{stock.peRatio ?? "N/A"}</td>
              <td className="px-4 py-2 text-right">{stock.latestEarnings ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 p-2">
        Disclaimer: Data is updated in real-time using unofficial sources and may periodically be inaccurate or unavailable.
      </p>
    </div>
  );
};

export default PortfolioTable;
