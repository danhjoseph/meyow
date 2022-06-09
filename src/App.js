import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.js";
import Cards from "./Components/Cards.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/info"></Route>
          <Route path="/" element={<Cards />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
