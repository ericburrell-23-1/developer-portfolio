import React from "react";
import DropdownMenu from "../components/dropdownMenu/DropdownMenu";
import Header from "../components/header/Header";
import Education from "../components/myStoryPage/Education";
import WorkHistory from "../components/myStoryPage/WorkHistory";
import SelfGuidedLearning from "../components/myStoryPage/SelfGuidedLearning";
import ProfessionalExperience from "../components/myStoryPage/ProfessionalExperience";
import "./pages.css";

const MyStoryPage = () => {
  return (
    <div className="my-story-page">
      <Header
        title="How I Became A Developer"
        background={"red-and-black.png"}
        BGSize="animate0_5"
      />
      <DropdownMenu />
      <Education />
      <WorkHistory />
      <SelfGuidedLearning />
      <ProfessionalExperience />
    </div>
  );
};

export default MyStoryPage;
