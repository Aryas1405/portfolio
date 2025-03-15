import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="sticky" sx={{ background: '#ffffff', color: '#1e293b', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar sx={{ justifyContent: 'center', gap: 3 }}>
                <Button href="#about" color="primary" variant="text">About</Button>
                <Button href="#projects" color="primary" variant="text">Projects</Button>
                <Button href="#experience" color="primary" variant="text">Experience</Button>
                <Button href="#contact" color="primary" variant="text">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
