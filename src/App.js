import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const __EDUCATION_PAGE = {
  MASTER: 0,
  BACHELOR: 1,
  PROGRAMMING: 2,
  CYBERSECURITY: 3,
  TOOL: 4
}
const __MAINPAGE = {
  HOME: 0,
  ABOUT: 1,
  EXPERIENCE: 2,
  EDUCATION: 3,
  CONTACT: 4,
  PROJECT: 5,
  EDUCATION_MASTER: 6,
  EDUCATION_BACHELOR: 7,
  EDUCATION_PROGRAMMING: 8,
  EDUCATION_CYBER: 9,
  EDUCATION_TOOL: 10
}

function App() {
  const [page, onPage] = useState(__MAINPAGE.HOME);
  return (
    <>
      <div id="main-application">
        <div class="main-header">
          <div class="main-headername" onClick={() => onPage(__MAINPAGE.HOME)}>Naruenart.K</div>
          <div id="header-menu">
            <div onClick={() => onPage(__MAINPAGE.HOME)}>Home</div>
            <div onClick={() => onPage(__MAINPAGE.ABOUT)}>About</div>
            <div onClick={() => onPage(__MAINPAGE.EXPERIENCE)}>Experience</div>
            <div onClick={() => onPage(__MAINPAGE.EDUCATION)}>Education</div>
            <div onClick={() => onPage(__MAINPAGE.CONTACT)}>Contact</div>
            <div class="main-resume">Resume</div>
          </div>
        </div>
        <div class="main-body">
          {
            (page == __MAINPAGE.HOME) 
            ? <Home getPage={onPage} __MAINPAGE={__MAINPAGE}/> 
            : (page == __MAINPAGE.PROJECT) 
            ? <Project />
            : (page == __MAINPAGE.ABOUT)
            ? <About getPage={onPage} __MAINPAGE={__MAINPAGE}/>
            : (page == __MAINPAGE.EDUCATION || page == __MAINPAGE.EDUCATION_MASTER)
            ? <Education getEducation={__EDUCATION_PAGE.MASTER} __EDUCATION_PAGE={__EDUCATION_PAGE}/>
            : (page == __MAINPAGE.EDUCATION_BACHELOR)
            ? <Education getEducation={__EDUCATION_PAGE.BACHELOR} __EDUCATION_PAGE={__EDUCATION_PAGE}/>
            : (page == __MAINPAGE.EXPERIENCE)
            ? <Experience />
            : (page == __MAINPAGE.CONTACT)
            ? <Contact />
            : <></>
          }
        </div>
      </div>
    </>
  );
}

export default App;