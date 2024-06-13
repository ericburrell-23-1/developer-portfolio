import React from "react";
import "./projects.css";

const OrdersDashboard = () => {
  return (
    <div className="proj-container">
      <h2 className="proj-title">D&M Order Entry Terminal</h2>
      <div className="proj-content">
        <p className="proj-description">
          When I started at D&M, every walk-in customer was helped by writing
          down their order via pen-and-paper, and fumbling around with their
          files on flash drives or over email. After countless lost or forgotten
          orders, it was time to create a custom ordering terminal, for use in
          our shop. I took it upon myself to build and integrate it, from
          scratch.
          <br />
          Read more about the{" "}
          <span className="proj-more-link">
            <a href="/">
              order tracker <span>&rarr;</span>
            </a>
          </span>
        </p>
        <div className="image-container">
          <img
            className="proj-thumbnail"
            src="orders-dashboard-thumbnail.png"
            alt="Screenshot of project main page"
            onClick={() => window.open("https://google.com", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersDashboard;
