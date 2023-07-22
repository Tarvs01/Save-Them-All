import React from "react";
import { useState, useEffect } from "react";
import PartnerCard from "./PartnerCard";
import { partnersData } from "../data/partners";

function Partners({ setColor }) {
  const [partners, setPartners] = useState({});
  const [loading, setLoading] = useState(true);

  /*   useEffect(() => {
    fetch(`https://savethemall.onrender.com/data/partners`)
      .then((response) => response.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There was an error of");
        console.log(error);
      });
  }, [partners]); */

  useEffect(() => {
    setPartners(partnersData);
    setLoading(false);
  });

  useEffect(() => {
    setColor("partners");
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
        <div className="partners">
          <h1>Our partners with similar goals</h1>
          <div className="partners-cont">
            {partners.map((partner) => {
              return <PartnerCard key={partner.id} partner={{ ...partner }} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Partners;
