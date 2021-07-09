import React from "react";

import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="canvas">
        <p className="disclaimer"></p>
      </div>
    </div>
  );
}

export default App;
