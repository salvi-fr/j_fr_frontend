import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import VendorOrderList from "@component/orders/VendorOrderList";
import React from "react";

const Orders = () => {
  return (
    <div>
      <DashboardPageHeader title="Orders" iconName="bag_filled" />
      <VendorOrderList />
    </div>
  );
};

Orders.layout = VendorDashboardLayout;

export default Orders;
