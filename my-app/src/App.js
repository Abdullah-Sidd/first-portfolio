import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
// import Card from "./components/Card";
import Intro from "./components/Intro";
import Lama from "./components/Lama";

function App() {
  return (
    <div className="App">
<Intro/>
<About/>
<Lama/>
<Contact/>
    </div>
  );
}

export default App;
