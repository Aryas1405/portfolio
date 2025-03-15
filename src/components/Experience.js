import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Software Engineer',
            company: 'Wemotive Forge Private Limited',
            duration: 'April 2022 – Present'
        },
        {
            title: 'Associate Software Engineer',
            company: 'Deepspace9 Technologies',
            duration: 'May 2021 – April 2022'
        }
    ];

    return (
        <Container id="experience" sx={{ py: 8 }}>
            <Typography variant="h2" gutterBottom>Experience</Typography>
            {experiences.map((exp, index) => (
                <Card key={index} className="experience-card" sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h5">{exp.title}</Typography>
                        <Typography variant="subtitle1">{exp.company}</Typography>
                        <Typography variant="subtitle2">{exp.duration}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Experience;