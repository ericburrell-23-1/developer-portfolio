import React from "react";
import "./Header.css";

const Header = ({ title, background, BGSize }) => {
  let animationClass = BGSize || "animate";
  return (
    <header className="header">
      <img
        src={background}
        alt="Decorative Background"
        className={animationClass}
      />
      <div className="header-overlay">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
