import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const NavbarBrand = styled(Link)`
  text-decoration: none;
  :hover {
    color: white;
  }
`;

const _Navbar = () => (
  <Navbar
    collapseOnSelect
    className="navbar mb-5 py-3"
    expand={false}
    bg="dark"
    variant="dark"
  >
    <Container>
      <NavbarBrand to="/">
        <div className="text-3xl font-bold">Rojan Dinc</div>
      </NavbarBrand>
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
