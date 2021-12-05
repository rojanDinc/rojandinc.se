import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav } from "react-bootstrap";

const _Navbar = () => (
  <Navbar
    collapseOnSelect
    className="navbar mb-5 py-3"
    expand={false}
    bg="dark"
    variant="dark"
  >
    <Container>
      <Navbar.Brand href="#home">
        <div className="text-3xl font-bold">Rojan Dinc</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export { _Navbar as Navbar };
