import React from "react";

const Projects = () => {
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
            This is a project and I'm going to tell you all about it here. It's
            so fun read more about the{" "}
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
              alt=""
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
              alt=""
            />
          </div>
          <p className="project-description">
            This is a personal project I made and its great and its so good and
            you're gonna hire me because you like it so much.{" "}
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
