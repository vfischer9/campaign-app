import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navb'>
                <Container>
                <Navbar.Brand href="#home">Campaign Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Issues</Nav.Link>
                        <NavDropdown title="Candidates" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Fred</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Ian</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Mark</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Jeanette</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#details">More details</Nav.Link>
                        <Nav.Link eventKey={2} href="#media">Media</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Home
