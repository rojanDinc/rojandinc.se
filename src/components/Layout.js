import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Footer, Navbar } from ".";

const Layout = ({ children }) => (
  <Container>
    <Row className="sticky-top">
      <Col xs={12}>
        <Navbar />
      </Col>
    </Row>
    {children}
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
);

export { Layout };
