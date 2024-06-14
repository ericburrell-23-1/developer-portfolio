import React from "react";
import { ORDER_COUNTER_LINK } from "../../utilities/constants/projectLinks";
import "./projects.css";

const OrderCounter = () => {
  return (
    <div className="proj-container">
      <h2 className="proj-title">Sports Order Counter</h2>
      <div className="proj-content">
        <p className="proj-description">
          At D&M, we were spending a lot of time computing how many prints
          needed to be billed to a customer, by counting them out by hand. Using
          the order data and a simple python script, this was quickly automated,
          saving plenty of time and money.
          <br />
          Read more about the{" "}
          <span className="proj-more-link">
            <a href="/">
              order counter <span>&rarr;</span>
            </a>
          </span>
        </p>
        <div className="image-container">
          <img
            className="proj-thumbnail"
            src="order-counter-thumbnail.png"
            alt="Screenshot of project main page"
            onClick={() => window.open(ORDER_COUNTER_LINK, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCounter;
