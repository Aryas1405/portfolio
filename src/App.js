// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/main.scss';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;