import React from "react";
import "./App.css";
import "./index.scss";
import Home from "./Pages/Home";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
