// App.js
import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

import './assets/styles/main.scss';
import { Box } from '@mui/material';

const App = () => {
    return (
        <Box className="app-container">
            <Header />
            <Box className='body-container'>
                <Intro />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </Box>
        </Box>
    );
}

export default App;