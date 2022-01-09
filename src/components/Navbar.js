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

const CustomNavbar = styled(Navbar)`
  background-color: var(--primary);
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const _Navbar = () => (
  <CustomNavbar
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
  </CustomNavbar>
);

export { _Navbar as Navbar };
