import { useState } from "react";

import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
