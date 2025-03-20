import React from 'react';
import { Typography, Box } from '@mui/material';
import './styles.css'
import { motion } from 'framer-motion';

const About = () => {
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
            viewport={{ once: true, amount: 0.1 }} // Trigger animation when 30% visible
            variants={smoothAnimation}
        >
            <Box className='about-section' id="about">
                <Typography variant='h4' className='title'>About Me</Typography>
                <Box className='about-container'>
                    <Typography variant="h6" className="description">
                        I’m Harsh Kumar Arya, a passionate Software Developer with 5 years of experience in designing and developing scalable, secure, and high-performance backend systems. I specialize in building robust applications using Node.js, Express.js, and NestJS, with expertise in managing complex databases like PostgreSQL, MongoDB, and Redis. <br/><br/>
                        My experience spans across industries, where I’ve developed solutions for Web3 platforms, e-commerce systems, and real-time communication tools. I'm proficient in crafting efficient RESTful APIs, implementing Auth0-based security, and deploying scalable services using AWS and Docker.<br/><br/>
                        I thrive in dynamic environments where I can architect powerful solutions, optimize performance, and collaborate with teams to deliver exceptional user experiences. Whether it's designing microservices, enhancing database efficiency, or improving CI/CD pipelines, I’m committed to driving impactful results through technology.<br/><br/>
                        Let's connect and build something remarkable! 🚀
                    </Typography>
                </Box>
                <Box className="cards-container">
                    <Box className='card-box'>
                        <Typography variant='h4' className='value'>5</Typography>
                        <Typography variant='h6'>Years Experience</Typography>
                    </Box>
                    <Box className='card-box'>
                        <Typography variant='h4' className='value'>20+</Typography>
                        <Typography variant='h6'>Project Completed</Typography>
                    </Box>
                    <Box className='card-box'>
                        <Typography variant='h4' className='value'>25+</Typography>
                        <Typography variant='h6'>Technologies</Typography>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default About;
