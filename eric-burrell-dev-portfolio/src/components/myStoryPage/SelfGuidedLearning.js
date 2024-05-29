import React from "react";
import "./myStory.css";

const SelfGuidedLearning = () => {
  return (
    <div className="sgl">
      <div className="content-wrapper">
        <div className="sgl-pic-wrapper">
          <img
            src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK"
            alt="Me writing code"
            className="sgl-pic"
          />
        </div>
        <div className="sgl-text">
          <h2>I learned a lot of new languages and skills on my own.</h2>
          <p>
            After working in sales for a couple of years, I made the difficult
            decision to switch careers - I was going to become a full-time
            developer. Despite knowing how to code and the experiences I had so
            far, it was still an incredibly daunting prospect. I didn't even
            know what the term "Full-Stack Developer" meant, but I was willing
            to take time away from paid work in order to learn how to become a
            real software developer - and I did that learning entirely on my
            own. <br />
            <br /> I started when I first had an interest in mobile development
            - I wanted to learn how to build iOS apps. I took my first course on
            Udemy learning Swift and SwiftUI (and you can see some of the apps I
            built{" "}
            <span className="more-link">
              <a href="/swift-ui">
                here<span>&rarr;</span>
              </a>
            </span>
            &nbsp;) <br />
            <br />
            After some time developing front-end iOS apps, I realized that if I
            wanted to build an app entirely on my own, I would probably need to
            be able to build a back-end server as well, so I decided to take
            another course, this time on building APIs with Node.js, Express.js,
            and MongoDB. I quickly became very comfortable with programming in
            JavaScript, database integration, and building REST APIs. <br />
            <br />
            After learning these skills, I decided the last major step in
            becoming a well-rounded developer would be to gain experience with
            web development. I took a couple more courses, focusing on the W3
            languages, and React, which is now my preferred way to build web
            applications. And of course, I started working on some personal
            projects, as I believe that is the best way to really learn new
            skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfGuidedLearning;
