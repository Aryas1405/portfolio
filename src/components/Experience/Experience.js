import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import './styles.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Software Engineer',
            company: 'Wemotive Forge Private Limited',
            companyUrl: 'https://www.wemotiveforge.com/',
            duration: 'April 2022 – Present',
            points: [
                'Designed and optimized backend architectures for Web3, e-commerce, and management systems.',
                'Developed REST APIs for seamless data exchange and integrated Auth0-based authentication.',
                'Implemented product customization and variant management for e-commerce platforms.',
                'Integrated YouTube APIs for fetching and managing playlists and video content.'
            ]
        },
        {
            title: 'Associate Software Engineer',
            company: 'Deepspace9 Technologies',
            companyUrl: 'https://www.deepspace9.tech/',
            duration: 'May 2021 – April 2022',
            points: [
                'Worked on building scalable web applications using React and Node.js.',
                'Implemented front-end designs using Material-UI for improved UI/UX.'
            ]
        },
        {
            title: 'Software Development Engineer',
            company: 'Inventics Software Private Limited',
            companyUrl: 'https://inventics.tech/',
            duration: 'April 2020 – April 2021',
            points: [
                'Developed a dynamic price list module enabling location-based and condition-driven service pricing.',
                'Improved service charge management by creating a flexible and scalable pricing system for better operational control.',
                'Collaborated directly with the client to implement custom features and enhancements for a laundry management application'
            ]
        }
    ];

    return (
        <Container className='experienceSection' id="experience" sx={{ py: 8 }}>
            <Typography className='exp-name' variant="h4" gutterBottom>
                Professional Experience
            </Typography>

            {experiences.map((exp, index) => (
                <Card key={index} className="experience-card" sx={{ mb: 3 }}>
                    <CardContent>
                        <Box className='title-container'>
                            <Typography className='title' variant="h5">{exp.title}</Typography>
                            <Typography variant="subtitle2">{exp.duration}</Typography>
                        </Box>
                        <Typography className='company' variant="subtitle1">
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {exp.company}
                            </a>
                        </Typography>
                        {/* Bullet Points for Key Responsibilities */}
                        <ul className="experience-points">
                            {exp.points.map((point, idx) => (
                                <li key={idx} className="experience-point">{point}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Experience;
