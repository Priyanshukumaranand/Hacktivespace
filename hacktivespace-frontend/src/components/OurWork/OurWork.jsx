import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import logo from '../../assets/logo.png';
import {projects} from '../projects/project';

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
