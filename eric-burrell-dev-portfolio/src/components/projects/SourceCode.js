import React from "react";

const SourceCode = ({ githubLink, projectName }) => {
  return (
    <div className="source-code">
      <h2>View The Code</h2>
      <p>It's all on GitHib. Have a look:</p>
      <a href={githubLink}>{projectName}</a>
    </div>
  );
};

export default SourceCode;
