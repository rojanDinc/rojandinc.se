import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <hr style={{color: "var(--dark-primary)"}} />
          </Col>
          <Col xs={12}>
            <div className="d-flex justify-content-center my-5">
              &#169; {currentYear}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
