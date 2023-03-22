import React from "react";
import { useEffect } from "react";
import { partners } from "../data/partners";
import PartnerCard from "./PartnerCard";

function Partners({ setColor }) {
  useEffect(() => {
    setColor("partners");
  });

  /* if (document.querySelector("#sound")) {
    document.querySelector("#sound").pause();
  } */

  return (
    <div className="partners">
      <h1>Our partners with similar goals</h1>
      <div className="partners-cont">
        {partners.map((partner) => {
          return <PartnerCard key={partner.id} partner={{ ...partner }} />;
        })}
      </div>
    </div>
  );
}

export default Partners;
