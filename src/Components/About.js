import React from "react";
import { useEffect } from "react";

function About({ setColor }) {
  useEffect(() => {
    setColor("about");
  });

  return (
    <div className="about">
      <section>
        <h1>Who we are</h1>
        <p>
          We are a group founded in 2019 for the sole purpose of preventing the
          extinction of as many endangered species as we can. Our founder,
          Humuhumunumunumuapua was
        </p>
      </section>
    </div>
  );
}

export default About;
