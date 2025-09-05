import React from "react";
import DashboardPage from "./features/dashboard/DashboardPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col px-4 py-6 bg-gray-100">
      {/* Header */}
      <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">
        Dynamic Portfolio Dashboard
      </h1>

      {/* Dashboard content */}
      <div className="flex flex-col items-center">
        <DashboardPage />
      </div>
    </div>
  );
};

export default App;
