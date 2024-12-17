import React, { useState } from "react";
import DashboardOverview from "./components/DashboardOverview";
import SalesChart from "./components/SalesChart";
import DropdownFilter from "./components/DropdownFilter";
import "./styles/dashboard.css";

// Mock data for different time ranges
const mockData = {
  week: [
    { "date": "2024-12-01", "sales": 1200 },
    { "date": "2024-12-02", "sales": 1500 },
    { "date": "2024-12-03", "sales": 1800 },
    { "date": "2024-12-04", "sales": 2000 },
    { "date": "2024-12-05", "sales": 1700 },
    { "date": "2024-12-06", "sales": 2200 },
    { "date": "2024-12-07", "sales": 2100 },
  ],
  month: [
    { "date": "2024-12-01", "sales": 1200 },
    { "date": "2024-12-05", "sales": 1700 },
    { "date": "2024-12-10", "sales": 2200 },
    { "date": "2024-12-15", "sales": 2500 },
    { "date": "2024-12-20", "sales": 2000 },
    { "date": "2024-12-25", "sales": 2300 },
    { "date": "2024-12-30", "sales": 1900 },
  ],
  year: [
    { "date": "2024-01-01", "sales": 5000 },
    { "date": "2024-04-01", "sales": 7000 },
    { "date": "2024-07-01", "sales": 6500 },
    { "date": "2024-10-01", "sales": 8000 },
    { "date": "2024-12-01", "sales": 12000 },
  ],
};

const App = () => {
  const [filter, setFilter] = useState("week"); // Default filter is 'week'
  const [data, setData] = useState(mockData.week); // Initialize with weekly data

  const handleFilterChange = (value) => {
    setFilter(value);
    setData(mockData[value]); // Update chart data based on selected filter
  };

  return (
    <div className="app">
      <DashboardOverview />
      <div className="chart-section">
        <DropdownFilter selected={filter} onChange={handleFilterChange} />
        <SalesChart data={data} />
      </div>
    </div>
  );
};

export default App;
