import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container id="about" sx={{ py: 8 }}>
            <Box>
                <Typography variant="h2" gutterBottom color="primary">
                    About Me
                </Typography>
                <Typography variant="body1">
                    I am a Software Developer dedicated to building scalable, secure, and high-performance backend systems that drive modern applications and deliver exceptional user experiences.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
