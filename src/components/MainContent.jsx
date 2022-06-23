import React from "react";
import Overview from "./Overview";
import TodaysDelivery from "./TodaysDelivery";

function MainContent() {
  return (
    <div className="main-content">
      <TodaysDelivery />
      <Overview />
    </div>
  );
}

export default MainContent;
