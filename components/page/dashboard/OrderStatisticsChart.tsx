"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js/auto";

const OrderStatisticsChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);
  const [filter, setFilter] = useState<"year" | "month" | "week">("year");
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const fetchData = (type: "year" | "month" | "week"): void => {
    const data = {
      year: [8000, 5000, 3000, 1000, 500, 200],
      month: [2000, 1500, 1000, 500],
      week: [700, 500, 300, 100, 50],
    };
    const labels = {
      year: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      month: ["Week 1", "Week 2", "Week 3", "Week 4"],
      week: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    };

    setChartData({
      labels: labels[type],
      datasets: [
        {
          label: "Inhouse",
          data: data[type],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "Vendor",
          data: data[type].map((val) => val - 1000),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  useEffect(() => {
    if (chartRef.current && chartData) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false, // Ensures proper scaling
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxWidth: 10,
                  font: {
                    size: 14,
                  },
                },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  color: "#e4e4e4",
                },
                ticks: {
                  stepSize: 2000,
                },
              },
            },
          } as ChartOptions<"line">,
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="col-lg-8 mx-auto">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
            <h4 className="text-primary d-flex align-items-center mb-2 mb-md-0">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
                alt="Order Statistics"
                style={{ width: "25px", marginRight: "10px" }}
              />
              Order Statistics
            </h4>
            <div className="btn-group d-flex flex-wrap">
              <button
                className={`btn btn-outline-primary btn-sm ${
                  filter === "year" ? "active" : ""
                }`}
                onClick={() => setFilter("year")}
              >
                This Year
              </button>
              <button
                className={`btn btn-outline-primary btn-sm ${
                  filter === "month" ? "active" : ""
                }`}
                onClick={() => setFilter("month")}
              >
                This Month
              </button>
              <button
                className={`btn btn-outline-primary btn-sm ${
                  filter === "week" ? "active" : ""
                }`}
                onClick={() => setFilter("week")}
              >
                This Week
              </button>
            </div>
          </div>
          <div style={{ position: "relative", height: "300px" }}>
            <canvas id="orderStatisticsChart" ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatisticsChart;
