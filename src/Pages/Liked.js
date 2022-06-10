import React, { useState } from "react";
import "./Liked.css";
import { liked } from "../Components/Cards";
import ClearIcon from "@mui/icons-material/Clear";

function Liked() {
  const [foo, setRemove] = useState([]);

  const remove = (index) => {
    liked.splice(index, 1);
    setRemove([...liked]);
  };

  return (
    <div>
      <div className="container">
        {liked.map((like, index) => (
          <div className="swipe" key={like.name}>
            <div
              style={{ backgroundImage: `url(${like.url})` }}
              className="card"
            >
              <div className="button">
                <ClearIcon
                  className="cancel"
                  fontSize="large"
                  onClick={() => remove(index)}
                />
              </div>
              <h3>{like.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Liked;
