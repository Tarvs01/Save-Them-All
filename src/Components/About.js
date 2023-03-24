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
          We are a legion of animal enthusiasts primarily devoted to the
          prevention of the extinction of animal species. Our work force
          includes personnels in various fields such as vetinary medicine,
          biology, agriculture, ICT and even law. Our varied work force enables
          us to have individuals prepped and ready to combat any unforseen
          circumstance that may arise in hindrance to our goal
        </p>
        <p>
          Our doors are always open to interns and volunteers who wishes to lend
          a helping hand and gain experience. We are also actively recruiting
          paid workers who are skilled in their area of expertise. You may think
          that your skill as a real estate agent has nothing to do with saving
          endangered animals, but we assure you, we will put it to good use and
          pay you appropriately.
        </p>
      </section>
    </div>
  );
}

export default About;
