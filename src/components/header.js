import React from 'react';
import { Link } from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { siteTitle } = this.props;
    return (
      <div>
        <Navbar color="faded" light fixed="top">
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-auto"
            style={{ border: 'none' }}
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <StyledLink to="/">{siteTitle}</StyledLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
