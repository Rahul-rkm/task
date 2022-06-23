import React from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);
function StatsChart() {
  let data = {
    datasets: [
      {
        data: [202, 99, 263, 347, 33],
        backgroundColor: [
          "#8292ab",
          "#faad41",
          "#2dce8a",
          "#0083ff",
          "#f4365c",
        ],
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Pending", "Processesing", "Ready to deliver", "Delivered"],
  };
  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
}

export default StatsChart;
