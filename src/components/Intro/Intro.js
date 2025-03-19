import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import profileImage from '../../assets/images/profileImage.jpg'; // Correct way to import
import './styles.css'
import CV from './../../assets/files/HarshResume.pdf'

const Intro = () => {
    return (
        <Box className='intro-container'>
            <Box className="intro">
                <Typography variant="h2" gutterBottom color="primary" className='intro-name'>
                    Hi, I'm Harsh Kumar Arya
                </Typography>
                <Typography variant="h4">
                    Backend Developer
                </Typography>
                <Typography variant="h6" className="description">
                    I am a Software Developer dedicated to building scalable, secure, and high-performance backend systems that drive modern applications and deliver exceptional user experiences.
                </Typography>
                <Box className='button-container'>
                    <Button className='touch-button'>Get in Touch</Button>
                    <Button
                        className='cv-button'
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = CV;
                            link.download = 'HarshKumarArya-CV.pdf';
                            link.click();
                        }}
                    >
                        Download CV
                    </Button>
                </Box>
            </Box>
            <Box className="image-box">
                <Box className='image-container'>
                    <div className='border-ring'></div>
                    <img src={profileImage} alt='Profile' className='intro-image' />
                </Box>
            </Box>
        </Box>
    );
};

export default Intro;
