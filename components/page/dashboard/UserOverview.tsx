/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserOverview: React.FC = () => {
  // Chart configuration using ApexOptions
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Total Customers", "Total Vendors", "Delivery Men"],
    colors: ["#7bc4ff", "#f9b530", "#1c1a93"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        if (typeof val === "number") {
          return `${val.toFixed(1)}%`; // Show percentage
        }
        return val.toString(); // Fallback for non-number values
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280, // Adjust chart size for smaller screens
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Chart data
  const chartData = [8, 10, 4]; // Example data: 8 customers, 10 vendors, 4 delivery men

  return (
    <div className="col-lg-4">
      <div className="card remove-card-shadow h-100">
        <div className="card-header">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            User Overview
          </h4>
        </div>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
          {/* Chart Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            {/* Chart */}
            <Chart
              options={chartOptions}
              series={chartData}
              type="donut"
              height={250}
            />
            {/* Total Users in Center */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none", // Prevent interfering with the chart
              }}
            ></div>
          </div>
          {/* Legend */}
          <div className="apex-legends flex-column mt-3 text-center">
            <div className="legend-item d-flex align-items-center justify-content-center mb-2">
              <span
                className="legend-color mr-2"
                style={{
                  backgroundColor: "#7bc4ff",
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>
              <span>Total Customers ({chartData[0]})</span>
            </div>
            <div className="legend-item d-flex align-items-center justify-content-center mb-2">
              <span
                className="legend-color mr-2"
                style={{
                  backgroundColor: "#f9b530",
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>
              <span>Total Vendors ({chartData[1]})</span>
            </div>
            <div className="legend-item d-flex align-items-center justify-content-center">
              <span
                className="legend-color mr-2"
                style={{
                  backgroundColor: "#1c1a93",
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>
              <span>Delivery Men ({chartData[2]})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
