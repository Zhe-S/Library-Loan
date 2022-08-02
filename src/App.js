import React, {useState} from "react";
import Navbar from "./component/front/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
