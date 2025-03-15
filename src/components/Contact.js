
import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
    return (
        <Container id="contact" sx={{ py: 8 }}>
            <Typography variant="h2" gutterBottom>Contact Me</Typography>
            <Box component="form" className="contact-form">
                <TextField fullWidth label="Name" margin="normal" required />
                <TextField fullWidth label="Email" margin="normal" required type="email" />
                <TextField fullWidth label="Message" multiline rows={4} margin="normal" required />
                <Button variant="contained" color="primary" fullWidth>Submit</Button>
            </Box>
        </Container>
    );
};

export default Contact;
