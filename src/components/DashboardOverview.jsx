import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/dashboard.css";

const DashboardOverview = () => {
  const stats = [
    { label: "Total Orders", value: 200, icon: "📦", color: "blue" },
    { label: "Revenue", value: "₹75,000", icon: "💰", color: "green" },
    { label: "Pending Orders", value: 25, icon: "⏳", color: "orange" },
    { label: "Active Users", value: 150, icon: "👤", color: "purple" },
  ];

  return (
    <div className="dashboard-overview">
      {stats.map((stat, index) => (
        <Card key={index} style={{ borderColor: stat.color }}>
          <CardContent>
            <Typography variant="h5" className="icon">
              {stat.icon}
            </Typography>
            <Typography variant="h6">{stat.label}</Typography>
            <Typography variant="h4">{stat.value}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardOverview;
