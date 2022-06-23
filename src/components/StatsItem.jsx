import React from "react";
import Card from "./shared/Card";

function StatsItem({ title, number, icon }) {
  return (
    <Card>
      {/* <div className="stats-item"> */}
      <div className="stats-item-main">
        <div className="stats-item-title">{title}</div>
        <div className="stats-item-number">{number}</div>
      </div>
      <div className="stats-icon-container">
        <img src={icon} alt="icon" className="stats-icon" />
      </div>
      {/* </div> */}
    </Card>
  );
}

export default StatsItem;
