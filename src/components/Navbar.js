import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { getClassNameProp } from "../util";

const NavbarTitle = styled(Link)`
  text-decoration: none;
`;

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
];
const MenuButton = styled.button`
  background: #fff;
  border: none;
`;
const MenuIcon = ({ onClick }) => (
  <MenuButton onClick={onClick}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </MenuButton>
);

const NavbarLink = (props) => (
  <Link
    activeClassName="underline"
    className={`navbar-link text-xl${getClassNameProp(props)}`}
    {...props}
  >
    {props.children}
  </Link>
);

const Navbar = () => {
  const collapsibleRef = React.useRef(null);
  const [state, setState] = React.useState({
    isMenuCollapsed: false,
    menuStyle: {
      opacity: 0,
      height: 0,
    },
  });

  React.useEffect(() => {
    if (state.isMenuCollapsed) {
      collapseMenu();
    } else {
      setState({
        ...state,
        menuStyle: {
          opacity: 0,
          height: 0,
        },
      });
    }
  }, [state.isMenuCollapsed]);

  const onMenuClick = () => {
    setState({ ...state, isMenuCollapsed: !state.isMenuCollapsed });
  };

  const collapseMenu = () => {
    const elements = [...collapsibleRef.current.children];
    const maxMenuHeight = elements.reduce(
      (prev, curr) => prev + curr.offsetHeight,
      0
    );
    setState({
      ...state,
      menuStyle: {
        opacity: 1,
        height: maxMenuHeight + 40,
      },
    });
  };

  return (
    <Container className="pt-4 sticky">
      <Row>
        <Col className="d-flex align-items-center">
          <MenuIcon onClick={onMenuClick} />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <NavbarTitle to="/" className="self-center font-bold text-3xl">
            Rojan Dinc
          </NavbarTitle>
        </Col>
        <Col></Col>
        <Col xs={12}>
          <div
            id="navbar-links-container"
            ref={collapsibleRef}
            className={`d-flex flex-column gap-y-2 pt-3 collapsible bg-gray-50 p-3 rounded-b-xl`}
            style={{ ...state.menuStyle }}
          >
            {state.isMenuCollapsed
              ? navLinks.map((nl, i) => (
                  <NavbarLink key={i} to={nl.href}>
                    {nl.title}
                  </NavbarLink>
                ))
              : ""}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { Navbar };
