import React from "react";
import DropdownMenu from "../components/dropdownMenu/DropdownMenu";
import Header from "../components/header/Header";
import OrdersDashboard from "../components/projectsPage/OrdersDashboard";
import OurList from "../components/projectsPage/OurList";
import OrderCounter from "../components/projectsPage/OrderCounter";
import "./pages.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Header title="Projects" background={"Color-Wheel.jpeg"} />
      <DropdownMenu />
      <OrdersDashboard />
      <OurList />
      <OrderCounter />
    </div>
  );
};

export default ProjectsPage;
