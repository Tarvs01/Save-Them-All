import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Partners from "./Partners";
import Animals from "./Animals";
import About from "./About";
import Error from "./Error";
import Animal from "./Animal";
import Peta from "./Peta";
import Footer from "./Footer";

function Router() {
  const [pageHighlight, setPageHighlight] = useState("home");

  const setColor = (page) => {
    setPageHighlight((prevState) => {
      if (window.innerWidth > 600) {
        document.querySelector(`#${prevState}`).style.color = "#000";
        document.querySelector(`#${page}`).style.color = "rgb(243, 94, 118)";
        return page;
      } else {
        return prevState;
      }
    });
  };

  return (
    <>
      <Navbar setColor={setColor} />

      <Routes>
        <Route path="/" element={<Home setColor={setColor} />} />
        <Route path="/partners" element={<Partners setColor={setColor} />} />
        <Route path="/animals" element={<Animals setColor={setColor} />} />
        <Route path="/about" element={<About setColor={setColor} />} />
        <Route path="/:id" element={<Animal setColor={setColor} />} />
        <Route path="/peta" element={<Peta setColor={setColor} />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Router;
