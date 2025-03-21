import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';
import './style.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
    const [formVisible, setFormVisible] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormVisible(false);

        const API_URL = "https://hqp4dofv1m.execute-api.eu-north-1.amazonaws.com/prod";

        const payload = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString(), // Capture submission time
        };

        try {
            const response = await axios.post(API_URL, payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                setShowSuccessMessage(true);
                setFormData({ name: '', email: '', message: '' }); // Reset form fields
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again.");
            setFormVisible(true);
        }

        // Show form again after 5 seconds
        setTimeout(() => {
            setFormVisible(true);
            setShowSuccessMessage(false);
        }, 5000);
    };

    const smoothAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={smoothAnimation}>
            <Box id="contact" className="contact-container">
                <Typography variant='h4' className='title'>Get In Touch</Typography>

                <Box className='contact-section'>
                    {/* Contact Information */}
                    <Box className="contact-info">
                        <Typography variant="h5" className='info-title' gutterBottom>Contact Information</Typography>
                        <Box className="contact-item">
                            <Email />
                            <Typography component="a" href="mailto:harsh2arya@gmail.com" className='email-link'>harsh2arya@gmail.com</Typography>
                        </Box>
                        <Box className="contact-item">
                            <Phone />
                            <Typography component="a" href='tel:+918909614648' className="email-link">+918909614648</Typography>
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

                    {/* Contact Form */}
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
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    required
                                    InputLabelProps={{ style: { color: '#7a7979' } }}
                                    InputProps={{ style: { color: '#e0e0e0' } }}
                                />

                                <Button type="submit" variant="contained" className='submit-button' fullWidth>
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
