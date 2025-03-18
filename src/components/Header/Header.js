import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import './styles.css'

const Header = () => {
    return (
        <AppBar position="sticky" className="header-appbar">
            <Toolbar className="header-toolbar">
                <Button href="#about" className="header-button">Home</Button>
                <Button href="#about" className="header-button">About</Button>
                <Button href="#projects" className="header-button">Projects</Button>
                <Button href="#experience" className="header-button">Experience</Button>
                <Button href="#experience" className="header-button">Skills</Button>
                <Button href="#contact" className="header-button">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
