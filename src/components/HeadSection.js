import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import theme from '../theme';

const StyledButton = styled(Button)`
  && {
    padding: 10px 30px;
    border: 2px solid #4a90e2;
    border-radius: 4px;
    background: #ffffff;
    color: #4a90e2;
  }

  &&:hover {
    border-color: #0468da;
    background-color: #0468da;
  }
`;

const StyledRow = styled(Row)`
  max-width: 1920px;
  margin: 0 auto;
`;

const HeadSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          meImage: file(relativePath: { eq: "me-min.png" }) {
            childImageSharp {
              fixed(width: 686, height: 768) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <StyledRow noGutters={true}>
            <Col
              sm="7"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <p className="mb-1" style={{ color: theme.lighterColor }}>
                  Hello
                </p>
                <h1 className="mb-2" style={{ color: theme.primaryColor }}>
                  I'm Rojan
                </h1>
                <h3 style={{ color: theme.lightColor }}>Fullstack developer</h3>
                <StyledButton>Kontakt</StyledButton>
              </div>
            </Col>
            <Col
              sm="5"
              className="d-flex justify-content-end align-items-start"
            >
              <Img
                backgroundColor={true}
                fixed={data.meImage.childImageSharp.fixed}
                alt="Profile image of Rojan Dinc"
              />
            </Col>
          </StyledRow>
        );
      }}
    />
  );
};

export default HeadSection;
