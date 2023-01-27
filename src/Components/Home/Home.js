import React from 'react';
import { Container, Col, Row, Card, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css';

function Home() {
  return (
    <div>
      <Container>
        <Image
          className=" shadow-lg rounded"
          src={require('../../assets/JOSHUA_JOHNSON_Pic.jpg')}
          alt="Profile Picture"
          roundedCircle
          width={190}
          height={200}
        />
        <Col>
          <br />
          <Row>
            <h5 className="typewriter">Welcome, This is Joshua Johnson</h5>
          </Row>
          <Row>
            <h5 className="typewriter">
              I'm a Self Taught MERN Stack Developer
            </h5>
          </Row>
          <Row>
            <h5 className="typewriter">This Portfolio Site is Developed </h5>
          </Row>
          <Row>
            <h5 className="typewriter">With React, HTML, CSS and Bootstrap</h5>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Home;
