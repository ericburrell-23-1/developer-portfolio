import React from "react";
import "./myStory.css";

const WorkHistory = () => {
  return (
    <div className="work-history">
      <div className="content-wrapper">
        <div className="work-history-text">
          <h2 className="work-history-header">After Graduation...</h2>
          <p>
            I took a job with a company called{" "}
            <a
              href="https://www.br-automation.com/en-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              B&R Industrial Automation
            </a>
            . I was set to start a career in sales as a <i>Sales Engeineer</i>,
            but for the first year worked as a <i>Controls Engineer</i> in order
            to become familiar with the technological architecture. <br />
            <br /> This included a full, three-month training course, conducted
            at B&R's HQ in Atlanta, GA, with a cohort of 7 other engineers. The
            curriculum included learning how to program PLCs, motion control,
            HMI development (which is eerily reminiscent of UI/UX design), and
            working with both Windows and Linux OS on Automation PCs. The course
            concluded with several training projects (which were graded - and{" "}
            <b>had bonuses attached!</b>) testing our skills and mimicking real
            machine-control software development and commissioning. <br />
            <br />
            Upon completing training, I continued to work as a Controls Engineer
            for the rest of the year, mostly supporting existing projects (as a
            new, young engineer tends to be assigned to do), looking into new
            tech that needed to be researched, and assisting customers where
            needed.
          </p>
          <h3>This was my first professional coding experience.</h3>
          <p>
            Working at B&R was very much so a software development role A lot of
            people hear "controls engineer" and don't exactly understand what
            that entailed.{" "}
            <b>Working at B&R was very much so a software development role</b>.
            This included:
          </p>
          <ul>
            <li>Writing high quality code to implement complex algorithms</li>
            <li>Following organization-defined best programming practices</li>
            <li>
              Using version control (git) and project planning (Jira) tools
            </li>
          </ul>
          <p>
            Some people picture Ladder programming and electrical engineering.
            This was certainly part of the job, but largely my experience was
            writing code in text-based languages to control equipment vital to
            the customer's business operations.
          </p>
        </div>
        <div className="controls-video-wrapper">
          <video
            className="controls-video"
            id="controls-video"
            autoPlay
            loop
            muted
          >
            <source src="controls-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <label htmlFor="controls-video">
            A sample of an automated cutter: motion control that I programmed,
            with a custom HMI (UI) that I built
          </label>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
