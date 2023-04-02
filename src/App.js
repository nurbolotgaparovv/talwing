import './App.css';
import React, {useState} from "react";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Service from "./componets/Service";
import Complete from "./componets/Complete";
import Project from "./componets/Project";
import Teams from "./componets/Teams";
import Latest from "./componets/Latest";
import Footer from "./componets/Footer";

function App() {
  return (
      <div className="App">
          <Header/>
          <Hero/>
          <Service/>
          <Complete/>
          <Project/>
          <Teams/>
          <Latest/>
          <Footer/>


      </div>
  );
}
export default App;


