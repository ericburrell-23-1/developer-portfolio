import React from "react";
import "./landingPage.css";

const MyStory = () => {
  return (
    <div className="my-story">
      <h1>My Story</h1>
      <p>
        A Purdue University-educated engineer, I started my career as a controls
        engineer in the industrial automation industry. Fast-forward a bit, my
        passion for innovation and problem-solving led me to transition from
        programming machines to crafting software solutions.
      </p>
      <p className="more-link">
        For a deeper dive into my journey and the pivotal moments along the way,
        explore{" "}
        <a href="/my-story">
          my story <span>&rarr;</span>
        </a>
      </p>
    </div>
  );
};

export default MyStory;
