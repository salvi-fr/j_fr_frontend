import AddressEditor from "@component/address/AddressEditor";
import DashboardLayout from "@component/layout/CustomerDashboardLayout";
import React from "react";

const AddressUpdater = () => {
  return <AddressEditor />;
};

AddressUpdater.layout = DashboardLayout;

export default AddressUpdater;
