import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Divider } from ".";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Row>
        <Col xs={12}>
          <Divider />
        </Col>
        <Col xs={12}>
          <div className="d-flex justify-content-center my-5">
            rojandinc.se &#169; {currentYear}
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export { Footer };
