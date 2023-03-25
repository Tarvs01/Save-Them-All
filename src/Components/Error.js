import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className="error-container">
        <h1>Error 404, Resource not found</h1>
        <Link to={"/"} className="error-button">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
