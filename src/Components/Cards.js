import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
  const [pets, setPets] = useState([]);

  return (
    <div>
      <div className="container">
        {pets.map((pet) => (
          <TinderCard
            className="swipe"
            key={pet.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${pet.img})` }}
              className="card"
            >
              <h3>{pet.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
