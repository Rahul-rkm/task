import React from "react";
import Card from "./shared/Card";

function TodaysCard({ username, orderId, icons }) {
  return (
    <div className="todays-card">
      <Card>
        <div className="details">
          <div className="details-item">{username}</div>
          <div className="details-item">{orderId}</div>
        </div>
        <div className="icons-array">
          {icons.map((icon) => (
            <img src={icon} className="todays-icon" alt="item-icon" />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default TodaysCard;
