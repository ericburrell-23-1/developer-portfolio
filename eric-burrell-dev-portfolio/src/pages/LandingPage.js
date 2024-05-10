import React from "react";
import WelcomeHeader from "../components/landingPage/WelcomeHeader";
import DropdownMenu from "../components/landingPage/DropdownMenu";
import MyStory from "../components/landingPage/MyStory";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <WelcomeHeader />
      <DropdownMenu />
      <MyStory />
    </div>
  );
};

export default LandingPage;
