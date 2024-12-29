import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png';

const projects = [
    {
        title: 'Project Alpha',
        description: 'Research on AI and Machine Learning.',
        img: 'path/to/project-alpha.jpg',
        startDate: 'January 2021',
        endDate: 'December 2021',
        teamMembers: ['John Doe', 'Jane Smith', 'Alice Johnson']
    },
    {
        title: 'Project Beta',
        description: 'Study on renewable energy sources.',
        img: 'path/to/project-beta.jpg',
        startDate: 'March 2020',
        endDate: 'February 2021',
        teamMembers: ['Bob Brown', 'Charlie Davis', 'Diana Evans']
    },
    {
        title: 'Project Gamma',
        description: 'Exploration of space technologies.',
        img: 'path/to/project-gamma.jpg',
        startDate: 'June 2019',
        endDate: 'May 2020',
        teamMembers: ['Evan Harris', 'Fiona Green', 'George King']
    },
    {
        title: 'Project Delta',
        description: 'Development of new medical devices.',
        img: 'path/to/project-delta.jpg',
        startDate: 'September 2018',
        endDate: 'August 2019',
        teamMembers: ['Hannah Lee', 'John Doe', 'Jane Smith']
    },
    {
        title: 'Project Epsilon',
        description: 'Innovations in blockchain technology.',
        img: 'path/to/project-epsilon.jpg',
        startDate: 'November 2020',
        endDate: 'October 2021',
        teamMembers: ['Alice Johnson', 'Bob Brown', 'Charlie Davis']
    }
];

const OurWork = () => {
    return (
        <Container>
            <h1 className="text-center my-5">Our Research Projects</h1>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="text-center">
                            <Card.Img variant="top" src={logo} alt={project.title} className="object-cover" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Card.Text><strong>Start Date:</strong> {project.startDate}</Card.Text>
                                <Card.Text><strong>End Date:</strong> {project.endDate}</Card.Text>
                                <Card.Text><strong>Team Members:</strong> {project.teamMembers.join(', ')}</Card.Text>
                                <Button variant="primary">View More Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OurWork;