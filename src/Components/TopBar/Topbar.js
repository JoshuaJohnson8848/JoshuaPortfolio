import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TopBar/TopBar.css';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="color_nav">
        <a
          className="cv"
          href={require('../../assets/Resume_Joshua_Johnson_4.pdf')}
        >
          CV ⬇
        </a>
        <Container>
          <Nav className="m-auto">
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/about');
              }}
            >
              About
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/skills');
              }}
            >
              Skills
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/projects');
              }}
            >
              Projects
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/education');
              }}
            >
              Education
            </Navbar.Brand>

            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/contact');
              }}
            >
              Contact
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
