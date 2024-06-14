import React from "react";
import "./project.css";

const Description = ({ whatItDoes, deployment, howToUse }) => {
  return (
    <div className="project-background">
      <h2>Project Info</h2>
      <h3>What It Does</h3>
      <p>{whatItDoes}</p>
      <h3>How It Was Deployed</h3>
      <p>{deployment}</p>
      <h3>How To Use It</h3>
      <p>{howToUse}</p>
    </div>
  );
};

export default Description;
