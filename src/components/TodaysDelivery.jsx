import React, { useState } from "react";
import Card from "./shared/Card";
import TodaysCard from "./TodaysCard";
import tshirt from "./icons/tshirt.svg";
import hat from "./icons/hat.svg";
import shoe from "./icons/shoe.svg";

function TodaysDelivery() {
  const [itemsArray, setItemsArray] = useState([
    { username: `98659865`, orderId: `ORD-0948`, icons: [tshirt] },
    { username: `ARIF`, orderId: `ORD-0949`, icons: [tshirt, tshirt] },
    { username: `Shiyas`, orderId: `ORD-0950`, icons: [hat] },
    { username: `Walk in customer`, orderId: `ORD-0951`, icons: [shoe] },
  ]);

  return (
    <div className="todays-delivery">
      <Card>
        <div className="todays-delivery-header">
          <div>Today's delivery</div>
          <form>
            <div className="form-input">
              <input placeholder="Search here" type="text" />
            </div>
            <div className="form-input">
              <select name="order-types" className="order-types">
                <option value="all">All Orders</option>
                <option value="shipped">Shipped Orders</option>
              </select>
            </div>
          </form>
        </div>
        <div className="todays-cards-array">
          {itemsArray.map((item) => (
            <TodaysCard
              username={item.username}
              orderId={item.orderId}
              icons={item.icons}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default TodaysDelivery;
