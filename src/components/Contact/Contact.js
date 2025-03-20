import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';
import './style.css';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formVisible, setFormVisible] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormVisible(false);
        setShowSuccessMessage(true);

        setTimeout(() => {
            setFormVisible(true);
            setShowSuccessMessage(false);
        }, 5000);
    };
    const smoothAnimation = {
        hidden: {
            opacity: 0,
            y: 30  // Subtle movement for a gentler effect
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,  // Extended duration for smoother flow
                ease: [0.25, 1, 0.5, 1]  // Soft, natural easing curve
            }
        }
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            variants={smoothAnimation}
        >
            <Box id="contact" className="contact-container">
                <Typography variant='h4' className='title'>Get In Touch</Typography>

                <Box className='contact-section'>
                    <Box className="contact-info">
                        <Typography variant="h5" className='info-title' gutterBottom>Contact Information</Typography>
                        <Box className="contact-item">
                            <Email />
                            <Typography
                                component="a"
                                href="mailto:harsh2arya@gmail.com"
                                className='email-link'
                            >
                                harsh2arya@gmail.com
                            </Typography>
                        </Box>

                        <Box className="contact-item">
                            <Phone />
                            <Typography component="a" href='tel:+918909614648' className="email-link">
                                +918909614648
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
                    </Box>

                    <Box className='contact-info'>
                        <Typography variant="h5" className='info-title' gutterBottom>Send a Message</Typography>

                        {showSuccessMessage && (
                            <Typography variant="h6" className='success-message'>
                                🎉 Thank you for reaching out! I'll get back to you as soon as possible. 😊
                            </Typography>
                        )}

                        {/* Form Visibility Control */}
                        {formVisible && (
                            <Box component="form" onSubmit={handleSubmit}>
                                <Typography className='form-label'>Name</Typography>
                                <TextField
                                    className='form-input'
                                    fullWidth
                                    label="Your Name"
                                    margin="normal"
                                    required
                                    InputLabelProps={{ style: { color: '#7a7979' } }}
                                    InputProps={{ style: { color: '#e0e0e0' } }}
                                />

                                <Typography className='form-label'>Email</Typography>
                                <TextField
                                    className='form-input'
                                    fullWidth
                                    label="your.email@example.com"
                                    margin="normal"
                                    required
                                    type="email"
                                    InputLabelProps={{ style: { color: '#7a7979' } }}
                                    InputProps={{ style: { color: '#e0e0e0' } }}
                                />

                                <Typography className='form-label'>Message</Typography>
                                <TextField
                                    className='form-input'
                                    fullWidth
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    required
                                    InputLabelProps={{ style: { color: '#7a7979' } }}
                                    InputProps={{ style: { color: '#e0e0e0' } }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    className='submit-button'
                                    fullWidth
                                >
                                    Send Message
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default Contact;
