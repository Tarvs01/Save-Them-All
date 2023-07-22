import React, { useState } from "react";
import { useEffect } from "react";
import AnimalCard from "./AnimalCard";
import { animalsData } from "../data/animals";

function Animals({ setColor }) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    fetch("https://savethemall.onrender.com/data/animals")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There was an error of");
        console.log(error);
      });
  }, [animals]); */

  useEffect(() => {
    setAnimals(animalsData);
    setLoading(false);
  });

  useEffect(() => {
    setColor("animals");
  });

  return (
    <div>
      {loading && (
        <div className="loading-container">
          <div className="spinner-container">
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
            <p>Loading...</p>
          </div>
        </div>
      )}
      {!loading && (
        <div className="animals-cont">
          <h1>Learn more about the animals under our care</h1>
          <div className="animals-card-cont">
            {animals.map((animal) => {
              return <AnimalCard key={animal.id} props={{ ...animal }} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Animals;
