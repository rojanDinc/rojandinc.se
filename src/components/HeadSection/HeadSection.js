import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withPrefix } from 'gatsby';
import './HeadSection.css';
import me from '../../images/me-min.png';

const HeadSection = () => {
  return (
    <Row noGutters={true}>
      <Col
        sm="7"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <p className="theme-lighter-color">Hello</p>
          <h1 className="theme-p-color">Hello I'm Rojan</h1>
          <h3 className="theme-light-color">Fullstack developer</h3>
          <Button className="theme-btn-outlined">Kontakt</Button>
        </div>
      </Col>
      <Col sm="5">
        <img src={me} alt="Logo" />
      </Col>
    </Row>
  );
};

export default HeadSection;
