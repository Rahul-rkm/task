import React from "react";
import Card from "./shared/Card";
import StatsChart from "./StatsChart";

function Overview() {
  return (
    <div className="overview">
      <Card>
        <div>Overview</div>
        <StatsChart />
      </Card>
    </div>
  );
}

export default Overview;
