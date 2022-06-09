import React from "react";
import "./Buttons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

function Buttons() {
  return (
    <div className="buttons">
      <IconButton className="refresh">
        <ReplayIcon fontsize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontsize="large" />
      </IconButton>
      <IconButton className="star">
        <StarIcon fontsize="large" />
      </IconButton>
      <IconButton className="favorite">
        <FavoriteIcon fontsize="large" />
      </IconButton>
      <IconButton className="power">
        <FlashOnIcon fontsize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
