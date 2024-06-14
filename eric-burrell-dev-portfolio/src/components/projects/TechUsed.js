import React from "react";
import "./project.css";

const TechUsed = ({ techStacks, description }) => {
  return (
    <div className="tech-used">
      <div className="tech-used-header">
        <h2>Tech Stack</h2>
      </div>
      <div className="tech-used-list">
        {techStacks?.map((tech, index) => (
          <span key={index} className="tech-used-item">
            {tech}
          </span>
        ))}
      </div>
      <div className="tech-used-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TechUsed;
