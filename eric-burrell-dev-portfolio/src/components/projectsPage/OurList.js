import React from "react";
import { OUR_LIST_LINK } from "../../utilities/constants/projectLinks";

const OurList = () => {
  return (
    <div className="proj-container">
      <h2 className="proj-title" style={{ "text-align": "end" }}>
        "Our List" Restaurant List
      </h2>
      <div className="proj-content">
        <div className="image-container">
          <img
            className="proj-thumbnail"
            src="order-counter-thumbnail.png"
            alt="Screenshot of project main page"
            onClick={() => window.open(OUR_LIST_LINK, "_blank")}
          />
        </div>
        <p className="proj-description">
          I took the idea of a restaurant list (like the ones all of my friends
          had in their <u>Notes</u> Apps) and extrapolated it into a shared list
          that's easier to use, specifically for your dinner party.{" "}
          <span className="proj-more-link">
            <a href="/projects/our-list">
              Read more, then try it out <span>&rarr;</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default OurList;
