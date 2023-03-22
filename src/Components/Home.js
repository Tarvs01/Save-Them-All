import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ setColor }) {
  useEffect(() => {
    setColor("home");
  });

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-dark-bg"></div>
        <div className="hero-words-cont">
          <h1>TarvsCorps</h1>
          <p>Restoring wildlife</p>
        </div>
      </div>

      <section>
        <p className="home-para">
          Name of the organization is devoted to the prevention of the extiction
          of as many endangered species as possible. We work together with a
          large number of animal scientists, volunteers, and partners to bring
          this goal to a reality. Founded in 2019, we have formed partnerships
          with top animal preservation organizations in order to increase the
          feasibility and attainability of our goal. Name of the organization is
          also working together with specific countries to further help in
          achieving their goal. Such countries include China, Thailand, Russia,
          Indonesia, Tanzania, Mozambique, Malaysia and The United Kingdom.
        </p>
      </section>

      <section className="yellow-bg">
        <h1>Our animals range</h1>
        <p className="home-para">
          Name of the organization is aimed at preventing the extinction of
          <strong> ALL </strong>
          animals, so we deal with any and all animals we can help. Be it bugs
          or elephants, our mission is to help with the preservation of as many
          species as possible. This has caused us to have a varying range of
          animals. We have Dogs, Monkeys, leopards, bees, elephants and more
          like the cute red pandas.
        </p>

        <div className="carousel-container">
          <section className="curved-carousel">
            <div className="curved-wrapper">
              <Link to="/3">
                <img src="../images/africandog1.jpg" alt="dog" />
              </Link>
              <Link to="/4">
                <img src="../images/amur1.jpg" alt="leopard" />
              </Link>
              <Link to="/5">
                <img src="../images/hawksbill1.jpg" alt="trutle" />
              </Link>
              <Link to="/14">
                <img src="../images/bumblebee1.jpg" alt="bee" />
              </Link>
              <Link to="/9">
                <img src="../images/redpanda1.jpg" alt="panda" />
              </Link>
              <Link to="/12">
                <img src="../images/bfferret1.jpg" alt="ferret" />
              </Link>
              <Link to="/2">
                <img src="../images/monarch1.jpg" alt="monarch butterfly" />
              </Link>
              <Link to="/10">
                <img src="../images/bonobo1.jpg" alt="monkey" />
              </Link>
              <Link to="/1">
                <img src="../images/sundatiger1.png" alt="tiger" />
              </Link>
              <Link to="/11">
                <img src="../images/borneanelephant1.jpg" alt="elephant" />
              </Link>
              <Link to="/15">
                <img src="../images/whoopingcrane1.jpg" alt="crane" />
              </Link>
              <Link to="/8">
                <img src="../images/sumatrarhino1.jpg" alt="rhino" />
              </Link>
              <Link to="/13">
                <img src="../images/chimpanzee3.jpg" alt="chimpanzee" />
              </Link>
              <Link to="/6">
                <img src="../images/mountaingorilla2.jpg" alt="gorilla" />
              </Link>
              <Link to="/7">
                <img src="../images/orangutan2.jpg" alt="orangutan" />
              </Link>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="donate">
          <h3>Name of the Organization</h3>
          <p>Join our cause today by supporting us</p>
          <button>Donate!</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
