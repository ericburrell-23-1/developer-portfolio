import React from "react";
import Header from "../components/myStoryPage/Header";
import Education from "../components/myStoryPage/Education";
import WorkHistory from "../components/myStoryPage/WorkHistory";
import "./pages.css";

const MyStoryPage = () => {
  return (
    <div className="my-story-page">
      <Header />
      <Education />
      <WorkHistory />
    </div>
  );
};

export default MyStoryPage;
