import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const Projects = () => {
    const projects = [
        { name: 'Valu - Web3 Platform', description: 'Built a backend system using Node.js and PostgreSQL.' },
        { name: 'ONDC Seller App', description: 'Created scalable product management workflows with MongoDB.' }
    ];

    return (
        <Container id="projects" sx={{ py: 8 }}>
            <Typography variant="h2" gutterBottom>Projects</Typography>
            {projects.map((project, index) => (
                <Card key={index} className="card" sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h5">{project.name}</Typography>
                        <Typography>{project.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Projects;
