import React from "react";
import "./Header.css";
import logo2 from "../Images/logo2.png";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header_icon" fontSize="large" />
      </IconButton>
      <img className="header_logo" src={logo2} alt="logo" />
      <IconButton>
        <InfoIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
