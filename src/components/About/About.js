import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import './styles.css'

const About = () => {
    return (
        <Box className='about-section'>
            <Typography variant='h4' className='title'>About Me</Typography>
            <Box className='about-container'>
                <Typography variant="h6" className="description">
                    I am a Software Developer dedicated to building scalable, secure, and high-performance backend systems that drive modern applications and deliver exceptional user experiences.
                </Typography>
            </Box>
            <Box className="cards-container">
                <Box className='card-box'>
                    <Typography variant='h4' className='value'>5</Typography>
                    <Typography variant='h6'>Years Experience</Typography>
                </Box>
                <Box className='card-box'>
                    <Typography variant='h4' className='value'>20+</Typography>
                    <Typography variant='h6'>Project Completed</Typography>
                </Box>
                <Box className='card-box'>
                    <Typography variant='h4' className='value'>20+</Typography>
                    <Typography variant='h6'>Technologies</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
