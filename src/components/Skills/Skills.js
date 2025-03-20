import React from 'react';
import { Typography, Box } from '@mui/material';
import './styles.css';
import NodeJs from './../../assets/icons/Node.js.svg';
import TypeScriptIcon from './../../assets/icons/TypeScript.svg';
import JavascriptIcon from './../../assets/icons/JavaScript.svg';
import NestjsIcon from './../../assets/icons/Nest.js.svg';
import MongoIcon from './../../assets/icons/MongoDB.svg';
import PostgresIcon from './../../assets/icons/PostgresSQL.svg';
import ExpressIcon from './../../assets/icons/Express.svg';
import PythonIcon from './../../assets/icons/Python.svg';
import PhpIcon from './../../assets/icons/PHP.svg';
import AWSIcon from './../../assets/icons/AWS.svg';
import DjangoIcon from './../../assets/icons/Django.svg';
import GithubIcon from './../../assets/icons/GitHub.svg';
import GitlabIcon from './../../assets/icons/GitLab.svg';
import RabbitIcon from './../../assets/icons/RabbitMQ.svg';
import SwaggerIcon from './../../assets/icons/Swagger.svg';
import GraphqlIcon from './../../assets/icons/GraphQL.svg';
import DockerIcon from './../../assets/icons/Docker.svg';
import MysqlIcon from './../../assets/icons/MySQL.svg';
import RedisIcon from './../../assets/icons/Redis.svg';
import Auth0Icon from './../../assets/icons/auth0-svgrepo-com.svg';
import LinuxIcon from './../../assets/icons/Linux.svg';
import CICDIcon from './../../assets/icons/ci-cd-svgrepo-com.svg';
import RestApiIcon from './../../assets/icons/rest-api.svg';


const skillsData = [
    { name: 'Node.js', icon: NodeJs },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'Nest.js', icon: NestjsIcon },
    { name: 'ExpressJS', icon: ExpressIcon },
    { name: 'MongoDB', icon: MongoIcon },
    { name: 'PostgreSql', icon: PostgresIcon },
    { name: 'Mysql', icon: MysqlIcon },
    { name: 'Redis', icon: RedisIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Django', icon: DjangoIcon },
    { name: 'php', icon: PhpIcon },
    { name: 'AWS', icon: AWSIcon },
    { name: 'RabbitMQ', icon: RabbitIcon },
    { name: 'GitHub', icon: GithubIcon },
    { name: 'GitLab', icon: GitlabIcon },
    { name: 'GraphQL', icon: GraphqlIcon },
    { name: 'Rest API', icon: RestApiIcon },
    { name: 'Swagger', icon: SwaggerIcon },
    { name: 'Auth0', icon: Auth0Icon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'CI/CD', icon: CICDIcon },
    { name: 'linux', icon: LinuxIcon },
    
];

const Skills = () => {
    return (
        <Box className='skills-section' id="skills">
            <Typography variant="h4" className='skills-title'>
                Technical Skills
            </Typography>

            <Box className='skills-grid'>
                {skillsData.map((skill, index) => (
                    <Box key={index} className='skill-box'>
                        <img src={skill.icon} alt={skill.name} className='skill-icon' />
                        <Typography variant="h6" className='skill-name'>
                            {skill.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
