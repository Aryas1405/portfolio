import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box className="footer">
        <Typography variant="body2">&copy; {new Date().getFullYear()} Harsh Kumar Arya. All Rights Reserved.</Typography>
    </Box>
);

export default Footer;