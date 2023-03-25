import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setColor }) => {
  let breakPoint = 600;

  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > breakPoint) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <nav>
      <div className="nav">
        <img src="../images/logo.svg" alt="logo" />
        {size > breakPoint ? (
          <ul>
            <Link
              to="/"
              id="home"
              onClick={() => {
                setColor("home");
              }}
            >
              Home
            </Link>
            <Link
              to="/animals"
              id="animals"
              onClick={() => {
                setColor("animals");
              }}
            >
              Animals
            </Link>
            <Link
              to="/about"
              id="about"
              onClick={() => {
                setColor("about");
              }}
            >
              About
            </Link>
            <Link
              to="/partners"
              id="partners"
              onClick={() => {
                setColor("partners");
              }}
            >
              Partners
            </Link>
          </ul>
        ) : null}
        {size <= breakPoint ? (
          <div
            className="small-menu"
            onClick={() => {
              setShow(!show);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {show && (
              <div className="small-menu-cont">
                <Link to="/">Home</Link>
                <Link to="/animals">Animals</Link>
                <Link to="/about">About</Link>
                <Link to="/partners">Partners</Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
