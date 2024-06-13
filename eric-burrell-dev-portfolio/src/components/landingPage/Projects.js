import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const Projects = () => {
  const navigate = useNavigate();

  const redirectToProject = (projectLink) => {
    if (projectLink.startsWith("http")) {
      window.open(projectLink, "_blank");
    } else {
      navigate(projectLink);
    }
  };

  return (
    <div className="projects">
      <h1>Top Projects</h1>
      <p className="more-link">
        Let me highlight a couple of my best projects here. To see all of my
        projects, check out my{" "}
        <a href="/all-projects">
          projects page <span>&rarr;</span>
        </a>
      </p>
      <div className="project-container">
        <h2 className="project-title">D&M Order Entry Terminal</h2>
        <div className="project-content">
          <p className="project-description">
            When I started at D&M, every walk-in customer was helped by writing
            down their order via pen-and-paper, and fumbling around with their
            files on flash drives or over email. After countless lost or
            forgotten orders, it was time to create a custom ordering terminal,
            for use in our shop. I took it upon myself to build and integrate
            it, from scratch.
            <br />
            Read more about the{" "}
            <span className="more-link">
              <a href="/">
                order tracker <span>&rarr;</span>
              </a>
            </span>
          </p>
          <div className="image-container">
            <img
              className="project-thumbnail"
              src="orders-dashboard-thumbnail.png"
              alt="Screenshot of project main page"
              onClick={() => redirectToProject("https://google.com")}
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <h2 className="project-title" style={{ "text-align": "end" }}>
          "Our List" Restaurant List
        </h2>
        <div className="project-content">
          <div className="image-container">
            <img
              className="project-thumbnail"
              src="order-counter-thumbnail.png"
              alt="Screenshot of project main page"
              onClick={() => redirectToProject("https://google.com")}
            />
          </div>
          <p className="project-description">
            I took the idea of a restaurant list (like the ones all of my
            friends had in their <u>Notes</u> Apps) and extrapolated it into a
            shared list that's easier to use, specifically for your dinner
            party.{" "}
            <span className="more-link">
              <a href="/">
                Read more, then try it out <span>&rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
