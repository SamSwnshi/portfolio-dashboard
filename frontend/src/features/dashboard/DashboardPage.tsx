import React, { useEffect, useState } from "react";
import { fetchPortfolio } from "../api/financeApi";
import PortfolioTable from "./PortfolioTable";
import type { StockHolding } from "../../types/StockHolding";

interface Totals {
    investment: number;
    presentValue: number;
    gainLoss: number;
}

const DashboardPage: React.FC = () => {
    const [holdings, setHoldings] = useState<StockHolding[]>([]);
    const [totals, setTotals] = useState<Totals | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        const fetchData = async () => {
            try {
                const portfolio = await fetchPortfolio();
                setHoldings(portfolio.holdings);
                setTotals(portfolio.totals);
                setError(null);
            } catch (e: unknown) {
                if (e instanceof Error) setError(e.message);
                else setError("Failed to fetch portfolio data");
            }
        };

        fetchData();
        interval = setInterval(fetchData, 15000);

        return () => clearInterval(interval);
    }, []);

    if (error)
        return (
            <div className="text-red-500 bg-red-100 p-4 rounded">
                <strong>Error:</strong> {error}
            </div>
        );

    if (!holdings.length)
        return <div className="text-gray-500">Loading portfolio data...</div>;

    return (
        <div className="w-full">
            {totals && (
                <div className="mb-6 text-center">
                    <p>
                        <strong>Total Investment:</strong>{" "}
                        <span className="text-blue-500">{totals.investment.toFixed(2)}</span>
                    </p>
                    <p>
                        <strong>Present Value:</strong>{" "}
                        <span className="text-green-500">{totals.presentValue.toFixed(2)}</span>
                    </p>
                    <p>
                        <strong>Gain/Loss:</strong>{" "}
                        <span
                            className={totals.gainLoss >= 0 ? "text-green-500" : "text-red-500"}
                        >
                            {totals.gainLoss.toFixed(2)}
                        </span>
                    </p>
                </div>
            )}

            {/* Full width table */}
            <div className="w-full">
                <PortfolioTable data={holdings} />
            </div>
        </div>
    );
};

export default DashboardPage;
