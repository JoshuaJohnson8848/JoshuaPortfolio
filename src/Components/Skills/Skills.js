import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  Container,
  RowProps,
  ColProps,
  Col,
  Row,
  Image,
} from 'react-bootstrap';
import '../Skills/Skills.css';

function Skills() {
  return (
    <div>
      <Container container>
        <Card className="skill_card mx-auto card-shadow rounded">
          <Card.Header className="skillHead badge bg-dark">Skills</Card.Header>
          <Row>
            <Col>
              <h5 className="nameR1">NodeJS</h5>
            </Col>
            <Col>
              <h5 className="nameR1">ExpressJS</h5>
            </Col>
            <Col>
              <h5 className="nameR1">GIT</h5>
            </Col>
            <Col>
              <h5 className="nameR1">MongoDB</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="nameR2">REST API</h5>
            </Col>
            <Col>
              <h5 className="nameR2">GITHUB</h5>
            </Col>
            <Col>
              <h5 className="nameR2">HTML</h5>
            </Col>
            <Col>
              <h5 className="nameR2">CSS</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="nameR3">JavaScript</h5>
            </Col>
            <Col>
              <h5 className="nameR3">SQL</h5>
            </Col>
            <Col>
              <h5 className="nameR3">GraphQL</h5>
            </Col>
            <Col>
              <h5 className="nameR3">Postman</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="nameR4 ">ReactJS</h5>
            </Col>
            <Col>
              <h5 className="nameR4 ">Axios</h5>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Skills;
