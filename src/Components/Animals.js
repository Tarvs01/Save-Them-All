import React from "react";
import { useEffect } from "react";
import { animals } from "../data/animals";
import AnimalCard from "./AnimalCard";

function Animals({ setColor }) {
  useEffect(() => {
    setColor("animals");
  });

  /* if (document.querySelector("#sound")) {
    document.querySelector("#sound").pause();
  } */

  return (
    <div className="animals-cont">
      <h1>Learn more about the animals under our care</h1>
      <div className="animals-card-cont">
        {animals.map((animal) => {
          return <AnimalCard key={animal.id} props={{ ...animal }} />;
        })}
      </div>
    </div>
  );
}

export default Animals;
