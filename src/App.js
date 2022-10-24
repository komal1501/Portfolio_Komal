import React from "react";
import './index.css';
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Tech from "./Components/Tech";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Volunteering from "./Components/Volunteering";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="">
     <Landing/>
      <div className="ml-48 pr-48 pt-8 flex flex-col">
      <AboutMe/>
      <Tech/>
      <Education/>
      <Projects/>
      <Volunteering/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
