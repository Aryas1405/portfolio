import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For hamburger icon
import './styles.css';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Toggle Drawer
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <>
            {/* Sidebar for Mobile */}
            <Drawer 
                anchor="left" 
                open={isDrawerOpen} 
                onClose={toggleDrawer(false)}
                className="sidebar-drawer"
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Typography variant="h5" className='sidebar-name'>
                        Harsh Kumar Arya
                    </Typography>
                    <List>
                        {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((text) => (
                            <ListItem button key={text} className="sidebar-button">
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* App Bar for Desktop */}
            <AppBar position="sticky" className="header-appbar">
                <Toolbar className="header-toolbar">
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={toggleDrawer(true)}
                        className="menu-icon"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box className="desktop-nav">
                        <Typography variant='h5' className='name'>Harsh Kumar Arya</Typography>
                    </Box>

                    <Box className="desktop-nav">
                        <Button href="#about" className="header-button">Home</Button>
                        <Button href="#about" className="header-button">About</Button>
                        <Button href="#projects" className="header-button">Projects</Button>
                        <Button href="#experience" className="header-button">Experience</Button>
                        <Button href="#skills" className="header-button">Skills</Button>
                        <Button href="#contact" className="header-button">Contact</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
