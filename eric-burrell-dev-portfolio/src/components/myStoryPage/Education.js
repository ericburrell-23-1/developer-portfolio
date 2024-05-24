import React from "react";

const Education = () => {
  return (
    <div className="education">
      <div className="content-wrapper">
        <div className="grad-pic-wrapper">
          <img
            src="grad_pic.jpeg"
            alt="Graduation from Purdue University"
            className="grad-pic"
          />
        </div>
        <div className="education-text">
          <h2 className="section-header">My first time ever programming...</h2>
          <p>
            was during my first year at <span>Purdue University</span>. Despite
            never having opened a code editor before, I was writing code in
            three different classes at the same time (learning C, MATLAB, and
            Python). <br /> <br />{" "}
            <b>I graduated in 2019 with a degree in Mechanical Engineering</b>{" "}
            (and a minor in Economics, in case you were interested). I took a
            fair number of classes where I had to program, and I specialized in
            controls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
