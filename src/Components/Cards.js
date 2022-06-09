import React, { useEffect, useState } from "react";
import db from "../Database/Firebase.js";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("pets")
      .onSnapshot((snapshot) =>
        setPets(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);

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
              style={{ backgroundImage: `url(${pet.url})` }}
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
