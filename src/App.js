import React from "react"
import './App.css';
import Router from "./Components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
