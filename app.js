// App.js
import React from 'react';
import Header from './src/components/Header/Header';
import About from './src/components/About';
import Projects from './src/components/Projects';
import Experience from './src/components/Experience';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
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
