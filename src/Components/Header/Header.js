import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Header = () => {
    return (
        <Navbar className='nav-css' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">Student Details</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto Nav">
              <Link to="/home">Home</Link>
              <Link to="/add">Add Student</Link>
            
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;