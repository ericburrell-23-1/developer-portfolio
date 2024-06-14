import React from "react";
import { Routes, Route } from "react-router-dom";
import OrdersDashboardPage from "./OrdersDashboardPage";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="orders-dashboard" element={<OrdersDashboardPage />} />
    </Routes>
  );
};

export default ProjectRoutes;
