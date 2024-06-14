import React from "react";
import "./project.css";

const ProjectHeader = ({ title, thumbnail, link }) => {
  return (
    <header className="project-header">
      <div className="project-header-title">
        <h1>{title}</h1>
      </div>
      <div className="project-header-image">
        <img
          src={"../" + thumbnail}
          alt="Project main page view"
          onClick={() => window.open(link, "_blank")}
        />
      </div>
    </header>
  );
};

export default ProjectHeader;
