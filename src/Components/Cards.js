import React, { useEffect, useState } from "react";
import db from "../Database/Firebase.js";
import TinderCard from "react-tinder-card";
import "./Cards.css";

export const liked = [];
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

  const like = (direction, name, url) => {
    if (direction === "right") {
      liked.push({ name, url });
    }
  };

  return (
    <div>
      <div className="container">
        {pets.map((pet) => (
          <TinderCard
            className="swipe"
            key={pet.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => like(dir, pet.name, pet.url)}
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
