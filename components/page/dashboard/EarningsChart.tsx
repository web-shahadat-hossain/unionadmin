"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const EarningsChart: React.FC = () => {
  // State to manage selected time range
  const [timeRange, setTimeRange] = useState("year"); // Default to "This Year"

  // Chart series based on the selected time range
  const getChartData = () => {
    switch (timeRange) {
      case "month":
        return [
          { name: "Inhouse", data: [1000, 2000, 1500, 2500] },
          { name: "Vendor", data: [800, 1200, 1000, 900] },
          { name: "Commission", data: [500, 600, 450, 700] },
        ]; // Example data for "This Month"
      case "week":
        return [
          { name: "Inhouse", data: [300, 500, 400, 600, 700] },
          { name: "Vendor", data: [200, 300, 250, 350, 400] },
          { name: "Commission", data: [100, 150, 120, 170, 200] },
        ]; // Example data for "This Week"
      case "year":
      default:
        return [
          { name: "Inhouse", data: [7000, 6000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
          { name: "Vendor", data: [5000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
          {
            name: "Commission",
            data: [3000, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ]; // Example data for "This Year"
    }
  };

  // Chart options
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 4,
      colors: undefined,
    },
    colors: ["#4fa7ff", "#9CCC65", "#FFCA28"],
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      categories:
        timeRange === "week"
          ? ["Mon", "Tue", "Wed", "Thu", "Fri"] // Weekly categories
          : timeRange === "month"
          ? ["Week 1", "Week 2", "Week 3", "Week 4"] // Monthly categories
          : [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ], // Yearly categories
      title: { text: "Time" },
    },
    yaxis: {
      title: { text: "Earnings ($)" },
      min: 0,
    },
    tooltip: {
      theme: "light",
      x: { show: true },
    },
  };

  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "8px" }}>
      <h4 style={{ marginBottom: "20px" }}>Earning Statistics</h4>

      {/* Time Range Buttons */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setTimeRange("year")}
          style={{
            padding: "10px 20px",
            background: timeRange === "year" ? "#4fa7ff" : "#f0f0f0",
            color: timeRange === "year" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          This Year
        </button>
        <button
          onClick={() => setTimeRange("month")}
          style={{
            padding: "10px 20px",
            background: timeRange === "month" ? "#4fa7ff" : "#f0f0f0",
            color: timeRange === "month" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          This Month
        </button>
        <button
          onClick={() => setTimeRange("week")}
          style={{
            padding: "10px 20px",
            background: timeRange === "week" ? "#4fa7ff" : "#f0f0f0",
            color: timeRange === "week" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          This Week
        </button>
      </div>

      {/* Chart */}
      <Chart
        options={chartOptions}
        series={getChartData()}
        type="line"
        height={350}
      />
    </div>
  );
};

export default EarningsChart;
