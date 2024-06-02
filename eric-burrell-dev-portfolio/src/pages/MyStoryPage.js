import React from "react";
import Header from "../components/myStoryPage/Header";
import Education from "../components/myStoryPage/Education";
import WorkHistory from "../components/myStoryPage/WorkHistory";
import SelfGuidedLearning from "../components/myStoryPage/SelfGuidedLearning";
import ProfessionalExperience from "../components/myStoryPage/ProfessionalExperience";
import "./pages.css";

const MyStoryPage = () => {
  return (
    <div className="my-story-page">
      <Header />
      <Education />
      <WorkHistory />
      <SelfGuidedLearning />
      <ProfessionalExperience />
    </div>
  );
};

export default MyStoryPage;
