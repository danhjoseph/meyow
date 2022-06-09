import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../Images/logo2.png";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosIcon className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header_logo" src={logo2} alt="logo" />
      </Link>
      <Link to="/info">
        <IconButton>
          <InfoIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
