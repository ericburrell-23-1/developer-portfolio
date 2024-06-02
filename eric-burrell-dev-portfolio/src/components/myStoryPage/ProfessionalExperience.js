import React from "react";
import "./myStory.css";

const ProfessionalExperience = () => {
  return (
    <div className="prof-exp">
      <div className="content-wrapper">
        <div className="pe-text">
          <h2>I now develop software for D&M Imaging.</h2>
          <p>
            As <i>Software Development and Production Lead</i>, I actually have
            a lot of responsibilities here, given it's a local small business
            with a very small staff. However, I've looked for opportunities to
            use home-grown software to optimize production capabilities. <br />
            <br />
            As is the case in any business operation, there are plenty of
            opportunities for automating regular computing tasks, saving the
            business valuable time, and thus money. Multiple times I have made
            use of Python for developing quick scripts to automate processes
            (such as the{" "}
            <span className="more-link" style={{ "padding-bottom": 0 }}>
              <a href="order-counter">
                Order Counter{" "}
                <span style={{ "padding-bottom": 0 }}>&rarr;</span>
              </a>
              &nbsp;
            </span>
            ), and used JavaScript to build a major project, the{" "}
            <span className="more-link" style={{ "padding-bottom": 0 }}>
              <a href="orders-dashboard">
                Order Entry Terminal{" "}
                <span style={{ "padding-bottom": 0 }}>&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="dnm-image-wrapper">
          <img
            src="DM-logo-blk-bg.jpg"
            alt="D&M Imaging logo"
            className="dnm-image"
            onClick={() => window.open("https://dmimaging.net", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
