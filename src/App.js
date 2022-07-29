import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts/index";
import Edit from "./components/contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
