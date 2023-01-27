import React from 'react';
import { Card, Container, Col, Row, ColProps, RowProps } from 'react-bootstrap';
import '../Contact/Contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Github,
  Twitter,
  Instagram,
  Facebook,
  GeoAltFill,
  TelephonePlusFill,
  EnvelopeFill,
} from 'react-bootstrap-icons';

function Contact() {
  return (
    <div>
      <Container container>
        <Card className="contact_card mx-auto card-shadow rounded ">
          <Card.Header className="contactHead badge bg-dark">
            Contact
          </Card.Header>
          <Row>
            <Col className="logo">
              <a href="http://github.com/JoshuaJohnson8848">
                <Github size={76} />
                <h5>GitHub</h5>
              </a>
            </Col>
            <Col className="logo">
              <a href="https://twitter.com/Joshua_8848?t=aAlpNirNjyuR3tfbUTYirw&s=09">
                <Twitter size={76} />
                <h5>Twitter</h5>
              </a>
            </Col>
            <Col className="logo">
              <a href="https://instagram.com/_joshua_johnson_?igshid=ZDdkNTZiNTM=">
                <Instagram size={76} />
                <h5>Instagram</h5>
              </a>
            </Col>
            <Col className="logo">
              <a href="https://www.facebook.com/profile.php?id=100015974324561">
                <Facebook size={76} />
                <h5>facebook</h5>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="logo2">
              <GeoAltFill size={50} />
              <br />
              <br />
              <h5>Ernakulam, Kerala, India</h5>
            </Col>
            <Col className="logo2">
              <TelephonePlusFill size={50} />
              <br />
              <br />
              <h5>+91 9605556893</h5>
            </Col>
            <Col className="logo2">
              <EnvelopeFill size={70} />
              <h5 className="mail">joshuatjohnson255@gmail.com</h5>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
