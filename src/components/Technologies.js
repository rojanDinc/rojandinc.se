import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { StaticQuery, graphql } from 'gatsby';

import HorizontalList from './HorizontalList';

const Technologies = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { frontmatter: { pagetype: { eq: "technology-post" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  image
                  alt
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <React.Fragment>
            <Container>
              {/** Heading and Text */}
              <Row>
                <Col xs="12">
                  <div className="d-inline-block">
                    <h2 className="h1">Teknologier</h2>
                    <hr className="hr-heading-line" />
                  </div>
                </Col>
                <Col xs="6">
                  <p className="theme-lighter-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eget condimentum ipsum. Nullam dapibus odio urna, eget
                    bibendum velit euismod eu.
                  </p>
                </Col>
                <Col xs="6" />
              </Row>
            </Container>
            <Container fluid className="no-padding">
              {/** Technologies grid */}
              <HorizontalList items={data.allMarkdownRemark.edges} />
            </Container>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Technologies;
