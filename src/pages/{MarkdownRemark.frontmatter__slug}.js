import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { Divider, Footer, Navbar } from "../components";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  img {
    width: 100%;
    border-radius: 0.75rem;
    margin-bottom: 0.75rem;
  }

  img + em {
    color: var(--light-primary);
  }

  p > em {
    text-align: center;
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <StyledContainer>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Divider />
        </Col>
        <Col xs={6}>
          <div>Posted: {new Date(frontmatter.date).toLocaleDateString()}</div>
        </Col>
        <Col xs={6}>
          <div className="d-flex justify-content-end">
            Share: LinkedIn | Github
          </div>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`;
