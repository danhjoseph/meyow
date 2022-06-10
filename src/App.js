import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.js";
import Info from "./Pages/Info";
import Liked from "./Pages/Liked.js";
import Cards from "./Components/Cards.js";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/info"
            element={
              <>
                <Header backButton="/" />
                <Info />
              </>
            }
          />
          <Route
            exact
            path="/liked"
            element={
              <>
                <Header backButton="/" />
                <Liked />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Cards />
                <Buttons />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
