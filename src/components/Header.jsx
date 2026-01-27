import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-48" src={logo} alt="logo"></img>
    </div>
  );
};

export default Header;
