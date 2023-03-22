import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animals } from "../data/animals";
import { Link } from "react-router-dom";
import { butterfly } from "../animations/butterfly";
import { bumblebee } from "../animations/bumblebee";
import { leopard } from "../animations/leopard";
import $ from "jquery";
import parse from "html-react-parser";

function Animal({ setColor }) {
  const { id } = useParams();
  const [animal, setAnimal] = useState(animals[parseInt(id) - 1]);
  const [mainImage, setMainImage] = useState(animal.img[0]);
  const [size, setSize] = useState(window.innerWidth);

  let timeout = null;
  let audio = null;

  const animationCaller = (animation, time) => {
    animation();
    let recall = Math.random() * 20000 + time;

    timeout = setTimeout(() => {
      animationCaller(animation, time);
    }, recall);
  };

  useEffect(() => {
    setColor("animals");
  });

  useEffect(() => {
    switch (animal.name) {
      case "Monarch Butterfly":
        animationCaller(butterfly, 9000);
        break;
      case "Franklin's Bumblebee":
        {
          audio = new Audio("../sounds/bees-sound.mp3");
          bumblebee();
          let $darkbg = $("<div>", { class: "darkbee" });
          let $warning = $(
            "<div>The bees are loud and angry, take note! <p>Okay</p></div>"
          );

          $warning.click(function () {
            $darkbg.css({ display: "none" });
            audio.loop = true;
            audio.play();
          });

          $darkbg.append($warning);
          $(".animal-container").append($darkbg);
        }
        break;
      case "Amur Leopard":
        animationCaller(leopard, 15000);
        break;
      default:
        break;
    }
    return () => {
      clearTimeout(timeout);
      if (audio) {
        audio.pause();
      }
      console.log("timeout cleared");
      console.log("sound cleared");
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    //const data = animals.find((animal) => animal.id === parseInt(id));
    //console.log(data);
    //setAnimal(data);
  });

  return (
    <div className="animal-container">
      <div className="animal-images-cont">
        <img src={mainImage} alt={animal.name} />
        <div className="animal-thumbs">
          <img
            src={animal.img[0]}
            alt="thumb"
            onClick={() => {
              setMainImage(animal.img[0]);
            }}
          />
          <img
            src={animal.img[1]}
            alt="thumb"
            onClick={() => {
              setMainImage(animal.img[1]);
            }}
          />
          <img
            src={animal.img[2]}
            alt="thumb"
            onClick={() => {
              setMainImage(animal.img[2]);
            }}
          />
        </div>
      </div>

      <div className="animal-words-cont">
        <h2>{animal.name}</h2>
        {animal.status && (
          <div className="properties">
            <h3>STATUS:</h3>
            {animal.status}
          </div>
        )}

        {animal.scientificName && (
          <div className="properties">
            <h3>Scientific Name: </h3>
            {animal.scientificName}
          </div>
        )}

        {animal.population && (
          <div className="properties">
            <h3>Population: </h3>
            {animal.population}
          </div>
        )}

        {animal.weight && (
          <div className="properties">
            <h3>Weight: </h3>
            {animal.weight}
          </div>
        )}

        {animal.length && (
          <div className="properties">
            <h3>Length: </h3>
            {animal.length}
          </div>
        )}

        {animal.height && (
          <div className="properties">
            <h3>Height: </h3>
            {animal.height}
          </div>
        )}

        {animal.lifeSpan && (
          <div className="properties">
            <h3>Lifespan: </h3>
            {animal.lifeSpan}
          </div>
        )}

        {animal.habitat && (
          <div className="properties habitat">
            <h3>Habitat: </h3>
            <p>{animal.habitat}</p>
          </div>
        )}
        <p className="about">{animal.about}</p>
        {animal.video && <div className="video">{parse(animal.video)}</div>}

        <Link to="/animals" className="go-back">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Animal;
