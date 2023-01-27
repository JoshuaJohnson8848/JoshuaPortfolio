import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Projects/Projects.css';
import { Container, Card, Row, Col, RowProps, ColProps } from 'react-bootstrap';

function Projects() {
  return (
    <div>
      <Container container>
        <Row>
          <Col>
            <Card className="project_card card-shadow ">
              <Card.Img
                className="productImg"
                variant="top"
                src={require('../../assets/doctorpatient.jpg')}
              />
              <Card.Body>
                <Card.Title className="project_title">
                  DoctorPatientAPI
                </Card.Title>
                <Card.Text className="project_desc">
                  Doctor Patient Consultancy :- This is a Backend API Tested
                  With Postman . Build With NodeJS Express, Mongoose, JWT Token,
                  Socket.IO, Rest API
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://github.com/JoshuaJohnson8848/doctorPatient.git">
                  <h6 className="project_link"> GitHub Repository</h6>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project_card card-shadow">
              <Card.Img
                className="productImg"
                variant="top"
                src={require('../../assets/product.jpeg')}
              />
              <Card.Body>
                <Card.Title className="project_title">ProductAPI</Card.Title>
                <Card.Text className="project_desc">
                  ProductAPI :- This is a Backend API Tested With Postman .
                  Build With NodeJS Express, Mongoose, JWT Token, Socket.IO,
                  Rest API
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://github.com/JoshuaJohnson8848/productAPI-NodeJs.git">
                  <h6 className="project_link">GitHub Repository</h6>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project_card card-shadow">
              <Card.Img
                className="productImg"
                variant="top"
                src={require('../../assets/notes.png')}
              />
              <Card.Body>
                <Card.Title className="project_title">NotesAPI</Card.Title>
                <Card.Text className="project_desc">
                  NotesAPI :- This is a Backend API Tested With Postman . Build
                  With NodeJS Express, Mongoose, JWT Token, Socket.IO, Rest API
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://github.com/JoshuaJohnson8848/Notes-GI_Projects.git">
                  <h6 className="project_link">GitHub Repository</h6>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
