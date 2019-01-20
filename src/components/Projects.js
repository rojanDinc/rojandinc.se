import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { StaticQuery, graphql } from 'gatsby';
import MasonryLayout from 'react-masonry-layout';

const Projects = ({ data }) => (
  <Container className="my-5">
    <Row>
      <Col xs="12">
        <div className="d-inline-block">
          <h2 className="h1">Projekt</h2>
          <hr className="hr-heading-line" />
        </div>
      </Col>
      <Col xs="6">
        <p className="theme-lighter-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          condimentum ipsum. Nullam dapibus odio urna, eget bibendum velit
          euismod eu.
        </p>
      </Col>
      <Col xs="6" />
    </Row>
    <Row>{/*<MasonryLayout id="masonry-layout" />*/}</Row>
  </Container>
);

export default Projects;
