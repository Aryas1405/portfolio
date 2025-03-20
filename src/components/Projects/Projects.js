import React from 'react';
import { Container, Typography, Card, CardContent, Box, Chip } from '@mui/material';
import './styles.css'; // Import CSS file for styling
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            name: 'Valu - Web3 Platform',
            description: ['Enabled seamless content delivery for 1000+ videos using optimized backend services and scalable architecture.', 'Implemented Auth0-based authentication and role-based access control.'],
            tags: ['NodeJS', 'PostgreSQL', 'Typescript']
        },
        {
            name: 'ONDC Seller App',
            description: ['Created scalable product management workflows with MongoDB.', ' Designed and implemented product variant management, tax structures, and order workflows'],
            tags: ['MongoDB', 'Node.js', 'Express.js']
        },
        {
            name: 'Education SDK',
            description: ['Built a school management system for student and teacher administration, attendance tracking, and course management.'],
            tags: ['MongoDB', 'Node.js', 'Express.js']
        },
        {
            name: 'Artifex – Project Management Tool',
            description: ['Developed task management workflows, role-based access control, and real-time discussions for collaboration.'],
            tags: ['MongoDB', 'Node.js', 'Express.js']
        },
        {
            name: 'POS Web App for Nike (India)',
            description: ['Developed a POS system for order, inventory, and accounting management across Nike India stores.'],
            tags: ['Laravel', 'JavaScript', 'MySQL']
        },
        {
            name: "VegNonVeg - India's First Multi-Brand Sneaker Store",
            description: ['Built backend services for order and inventory management.'],
            tags: ['Laravel', 'JavaScript', 'MySQL']
        },
        {
            name: 'Chat-App (Real-Time Communication System)',
            description: ['Developed a real-time chat application with multi-user chat rooms using WebSockets.'],
            tags: ['Node.js', 'MongoDB', 'Express.js', 'Mongoose', 'Socket.io']
        },
    ];
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
            viewport={{ once: true, amount: 0.1 }}
            variants={smoothAnimation}
        >
            <Container id="projects" className="projects-container">
                <Typography variant="h4" className="section-title">Projects</Typography>
                <Box className="project-grid">
                    {projects.map((project, index) => (
                        <Card key={index} className="project-card">
                            <CardContent>
                                <Typography variant="h5" className="project-title">{project.name}</Typography>
                                <Typography className="project-description">
                                    <ul>
                                        {project.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                </Typography>

                                <Box className="tags">
                                    {project.tags.map((tag, idx) => (
                                        <Chip key={idx} label={tag} className="tag-chip" />
                                    ))}
                                </Box>

                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </motion.div>
    );
};

export default Projects;
