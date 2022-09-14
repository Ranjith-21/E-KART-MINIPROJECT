import React from "react";
import './App.scss'

function OrderDashBoard({orderCount}) {

  return (
    <div className="OrderDashBoard">
      <h1>Total Items Ordered:{orderCount}</h1>
    </div>
  );
}
export default OrderDashBoard;