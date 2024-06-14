import React from "react";
import "./project.css";

const ProjectBackground = ({ text }) => {
  return (
    <div className="project-background">
      <h2>Background</h2>
      <p>{text}</p>
    </div>
  );
};

export default ProjectBackground;
