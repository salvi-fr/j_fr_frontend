import CustomerDashboardLayout from "@component/layout/CustomerDashboardLayout";
import CustomerOrderList from "@component/orders/CustomerOrderList";
import React from "react";

const Orders = () => {
  return <CustomerOrderList />;
};

Orders.layout = CustomerDashboardLayout;

export default Orders;
