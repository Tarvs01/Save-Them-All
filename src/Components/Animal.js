import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { butterfly } from "../animations/butterfly";
import { bumblebee } from "../animations/bumblebee";
import { leopard } from "../animations/leopard";
import $ from "jquery";
import parse from "html-react-parser";
import { animalsData } from "../data/animals";

function Animal({ setColor }) {
  const { id } = useParams();
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);

  /*   useEffect(() => {
    fetch(`https://savethemall.onrender.com/data/animals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
        console.log(data);
        console.log(animal);
        setLoading(false);
        console.log("data fetched");
        console.log(loading);
      })
      .catch((error) => {
        console.log("There was an error of");
        console.log(error);
      });
  }, []); */

  useEffect(() => {
    let anim = animalsData.find((_data) => {
      return _data.id === Number(id);
    });
    setAnimal(anim);
    setLoading(false);
  });

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
  }, []);

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
    };
  }, [loading]);

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
        <div className="animal-container">
          <div className="animal-images-cont">
            <img src={animal.img[0]} alt={animal.name} id="animalImage" />
            <div className="animal-thumbs">
              <img
                src={animal.img[0]}
                alt="thumb"
                onClick={() => {
                  document.querySelector("#animalImage").src = animal.img[0];
                }}
              />
              <img
                src={animal.img[1]}
                alt="thumb"
                onClick={() => {
                  document.querySelector("#animalImage").src = animal.img[1];
                }}
              />
              <img
                src={animal.img[2]}
                alt="thumb"
                onClick={() => {
                  document.querySelector("#animalImage").src = animal.img[2];
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
      )}
    </div>
  );
}

export default Animal;
