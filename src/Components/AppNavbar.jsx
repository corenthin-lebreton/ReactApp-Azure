import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function AppNavbar(){

	return(
	
	<>
		  <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Accueil </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/chatbot">Chatbot</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
	</>
	
	);
}