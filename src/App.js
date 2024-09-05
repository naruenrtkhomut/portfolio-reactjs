import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';


function App() {
  const [page, onPage] = useState("home");
  return (
    <>
      <div id="main-application">
        <div class="main-header">
          <div class="main-headername">Naruenart.K</div>
          <div id="header-menu">
            <div onClick={() => onPage("home")}>Home</div>
            <div onClick={() => onPage("about")}>About</div>
            <div onClick={() => onPage("experience")}>Experience</div>
            <div onClick={() => onPage("education")}>Education</div>
            <div onClick={() => onPage("contact")}>Contact</div>
            <div class="main-resume">Resume</div>
          </div>
        </div>
        <div class="main-body">
          {
            (page == "home") 
            ? <Home getPage={onPage}/> 
            : (page == "project") 
            ? <>< Project /></> 
            : (page == "about")
            ? <About />
            : <></>
          }
        </div>
      </div>
    </>
  );
}

export default App;