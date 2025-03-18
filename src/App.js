// App.js
import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './assets/styles/main.scss';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Intro />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;