import React from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';
import './style.css';

const Contact = () => {
    return (
        <Container id="contact" className="contact-container">
            {/* Contact Information Section */}
            <Paper className="contact-info">
                <Typography variant="h4" gutterBottom>Contact Information</Typography>
                <Box className="contact-item">
                    <Email />
                    <Typography>
                        <a href="mailto:harsh2arya@gmail.com" className="email-link">
                            Email: harsh2arya@gmail.com
                        </a>
                    </Typography>
                </Box>

                <Box className="contact-item">
                    <Phone />
                    <Typography>
                        <a href="tel:+918909614648" className="phone-link">
                            +918909614648
                        </a>
                    </Typography>
                </Box>

                <Box className="contact-item">
                    <LocationOn />
                    <Typography>Noida, Uttar Pradesh, India</Typography>
                </Box>
                <Box className="contact-icons">
                    <a href="https://www.linkedin.com/in/harsh2arya" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/Aryas1405" target="_blank" rel="noopener noreferrer">
                        <GitHub />
                    </a>
                </Box>

            </Paper>

            {/* Message Form Section */}
            <Paper className="contact-form">
                <Typography variant="h4" gutterBottom>Send a Message</Typography>
                <Box component="form">
                    <TextField fullWidth label="Name" margin="normal" required />
                    <TextField fullWidth label="Email" margin="normal" required type="email" />
                    <TextField fullWidth label="Message" multiline rows={4} margin="normal" required />
                    <Button variant="contained" fullWidth>Send Message</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Contact;
