import 'bootstrap/dist/css/bootstrap.min.css';
import '../About/About.css';

import React from 'react';
import {
  ListGroup,
  Card,
  Container,
  RowProps,
  ColProps,
} from 'react-bootstrap';

function About() {
  return (
    <div>
      <Container container>
        <Card className="about_card mx-auto rounded card-shadow">
          <Card.Header className="aboutHeader badge bg-dark">About</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="about_desc">
              I'm a Self Taught MERN Stack Developer, Completed BCA Graduation
              From Presentation College of Applied Science, Puthenvelikara,
              Ernakulam . Interested to Learn New Technologies. I have Completed
              Several Projects in NodeJS Express REST API
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
}

export default About;
