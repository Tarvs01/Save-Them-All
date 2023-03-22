import React from "react";
import { Link } from "react-router-dom";

function PartnerCard({ partner }) {
  return (
    <div className="partner-cont">
      <img src={partner.img} alt={partner.name} />
      <h3>{partner.name}</h3>
      <p>{partner.about}</p>
      {partner.warning && (
        <p className="warning">
          {partner.warning}
          <Link to="/peta">Read More.</Link>
        </p>
      )}
      <a href={partner.link}>Visit Website</a>
    </div>
  );
}

export default PartnerCard;
