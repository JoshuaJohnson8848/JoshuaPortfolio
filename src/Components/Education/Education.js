import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ListGroup,
  Card,
  Container,
  RowProps,
  ColProps,
  Col,
  Row,
} from 'react-bootstrap';
import '../Education/Education.css';

function Education() {
  return (
    <div>
      <Container container>
        <Card className="education_card mx-auto card-shadow rounded">
          <Card.Header className="education_Header">Graduation</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Course</h5>
                </Col>
                <Col>
                  <h5 className="text">BCA</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Institution</h5>
                </Col>
                <Col>
                  <h5 className="text">Presentation College of </h5>
                  <h5 className="text">Applied Science</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Year Of Pass</h5>
                </Col>
                <Col>
                  <h5 className="text">2022</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Percentage</h5>
                </Col>
                <Col>
                  <h5 className="text">62%</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <Card.Header className="education_Header">Class XII</Card.Header>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Stream</h5>
                </Col>
                <Col>
                  <h5 className="text">Science (Biology)</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Institution</h5>
                </Col>
                <Col>
                  <h5 className="text">St Sebastian's HSS</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Year Of Pass</h5>
                </Col>
                <Col>
                  <h5 className="text">2019</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Percentage</h5>
                </Col>
                <Col>
                  <h5 className="text">74%</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <Card.Header className="education_Header">Class X</Card.Header>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Board</h5>
                </Col>
                <Col>
                  <h5 className="text">Kerala</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Institution</h5>
                </Col>
                <Col>
                  <h5 className="text">St Sebastian's HSS</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Year Of Pass</h5>
                </Col>
                <Col>
                  <h5 className="text">2017</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5 className="text">Percentage</h5>
                </Col>
                <Col>
                  <h5 className="text">92%</h5>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
}

export default Education;
