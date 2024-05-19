import React from "react";
import "./landingPage.css";

const TechStacks = () => {
  return (
    <div className="tech-stacks">
      <h1>Tech Stacks</h1>
      <p className="more-link">
        I've worked with a number of different technologies at various levels of
        proficiency, and I pride myself on being{" "}
        <b>able to pick up new ones quickly</b>. But right here, I'll highlight
        my go-tos and the ones I'm most comfortable with.{" "}
        <a href="/all-tech">
          See more details about my tech stacks <span>&rarr;</span>
        </a>
      </p>
      <div className="tech-lists">
        <div className="frontend-tech">
          <h2>Front-End Technologies</h2>
          <ul>
            <li>
              HTML, CSS, & JavaScript
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </li>
            <li>
              iOS Development
              <ul className="sublist">
                <li>Swift/SwiftUI</li>
                <li></li>
                <li>XCode</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="backend-tech">
          <h2>Back-End Technologies</h2>
          <ul>
            <li>Node.js/Express.js</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="other-tech">
          <h2>Other Technologies</h2>
          <ul>
            <li>REST APIs</li>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>
              PLC Programming
              <ul>
                <li>C/C++</li>
                <li>HMI Design</li>
              </ul>
            </li>
            <li>MATLAB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
