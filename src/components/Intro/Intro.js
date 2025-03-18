import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import profileImage from '../../assets/images/IMG_20241101_172457.jpg'; // Correct way to import
import './styles.css'
const Intro = () => {
    return (
        <Box className='intro-container'>
            <Box>
                <Typography variant="h1" gutterBottom color="primary">
                   Hi, I am Harsh Kumar Arya
                </Typography>
                <Typography variant="body1">
                    I am a Software Developer dedicated to building scalable, secure, and high-performance backend systems that drive modern applications and deliver exceptional user experiences.
                </Typography>
            </Box>
            <Box className='image-container'>
            <div className='border-ring'></div>  {/* Spreading Border */}
            <img src={profileImage} alt='Profile' className='intro-image'/>
        </Box>
        </Box>
    );
};

export default Intro;
