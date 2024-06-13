import React from "react";
import WelcomeHeader from "../components/landingPage/WelcomeHeader";
import DropdownMenu from "../components/dropdownMenu/DropdownMenu";
import MyStory from "../components/landingPage/MyStory";
import Projects from "../components/landingPage/Projects";
import TechStacks from "../components/landingPage/TechStacks";
import "./pages.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <WelcomeHeader />
      <DropdownMenu />
      <MyStory />
      <Projects />
      <TechStacks />
    </div>
  );
};

export default LandingPage;
