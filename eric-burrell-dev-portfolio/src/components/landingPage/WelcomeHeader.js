import React from "react";
import "./landingPage.css";

const WelcomeHeader = () => {
  return (
    <div>
      <header className="welcome-header">
        <div className="welcome-message">
          <h1 className="welcome-message-header">
            Hey! I'm Eric,
            <br />
            Full-Stack Software Engineer.
          </h1>
          <p>
            I'd like to show you a few of my favorite projects I've worked on so
            far, and tell you a bit about my background.
            <br />
            <br />
            Scroll down to hear my story, or pick any of the options from the
            dropdown to skip ahead.
          </p>
        </div>
        <div className="portrait">
          <img src="ink-portrait.png" alt="" className="portrait-image" />
        </div>
      </header>
    </div>
  );
};

export default WelcomeHeader;
