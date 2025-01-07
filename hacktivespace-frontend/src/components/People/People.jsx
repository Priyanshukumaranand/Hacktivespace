import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../assets/logo.png'; 

const people = [
    { name: 'John Doe', role: 'Developer', img: 'path/to/john.jpg' },
    { name: 'Jane Smith', role: 'Designer', img: 'path/to/jane.jpg' },
    { name: 'Alice Johnson', role: 'Product Manager', img: 'path/to/alice.jpg' },
    { name: 'Bob Brown', role: 'QA Engineer', img: 'path/to/bob.jpg' },
    { name: 'Charlie Davis', role: 'DevOps Engineer', img: 'path/to/charlie.jpg' },
    { name: 'Diana Evans', role: 'Scrum Master', img: 'path/to/diana.jpg' },
    { name: 'Evan Harris', role: 'Backend Developer', img: 'path/to/evan.jpg' },
    { name: 'Fiona Green', role: 'Frontend Developer', img: 'path/to/fiona.jpg' },
    { name: 'George King', role: 'UI/UX Designer', img: 'path/to/george.jpg' },
    { name: 'Hannah Lee', role: 'Data Scientist', img: 'path/to/hannah.jpg' }
];

const People = () => {
    return (
        <Container>
            <h1 className="text-center my-5">Our Team</h1>
            <Row>
                {people.map((person, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="text-center">
                            <div className="flex justify-center items-center mx-auto">
                                <Card.Img variant="top" src={logo} alt={person.name} className="w-24 h-24 rounded-full object-cover" />
                            </div>
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Text>{person.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default People;
