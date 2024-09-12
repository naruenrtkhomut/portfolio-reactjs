import { useState } from 'react';
import './Home.css';


function Home({getPage, __MAINPAGE}) {
    const projectPage = () => getPage(__MAINPAGE.PROJECT);
    return (
        <>
            <div id="home-page">
                <p class="home-page-hi">Hi, my name is</p>
                <p class="home-page-headername01">Naruenart Khomut</p>
                <p class="home-page-headername">I build applications as Full Stack Developer</p>
                <div class="home-page-bief">
                    <p>I'm a software engineer and electronic engineer also.</p>
                    <p>I was a programmer as PPA I builded some window applications and web sites to support client in work</p>
                    <p>I have been product engineer I solved the problem of electronic charger and I bulided window application to support team and help my team to work easier</p>
                    <p>I builded some applicaions (wpf, winform, AI) and web sites in some useful and projects</p>
                </div>
                <div class="home-page-project-click" onClick={projectPage}>My projects</div>
            </div>
        </>
    )
}
export default Home;