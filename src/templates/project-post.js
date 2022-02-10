import * as React from 'react';
import { graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { Divider, Layout } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { formatDateRange } from "../util";

const Styles = styled.div`
  img {
    max-width: 100%;
    width: fit-content;
    border-radius: 0.75rem;
    margin-bottom: 0.75rem;
    align-self: center;
  }

  img + em {
    color: var(--light-primary);
    align-self: center;
  }

  p {
    display: flex;
    flex-direction: column;
  }

  pre {
    position: relative;
  }

  code {
    background: transparent;
  }
`;

const ProjectPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Styles>
        <Row>
          <Col xs="auto">
            <GatsbyImage className="mb-4 project-image" image={getImage(frontmatter.logo)} alt={frontmatter.logoAlt} />
          </Col>
          <Col className="">
            <h1 className="project-title">{frontmatter.workRole}</h1>
            <div>{frontmatter.title}</div>
            <div>{formatDateRange(frontmatter.from, frontmatter.until, frontmatter.current)}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              id="project-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Styles>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        from(formatString: "YYYY-MM-DD")
        until(formatString: "YYYY-MM-DD")
        logo {
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        logoAlt
        workRole
        current
      }
    }
  }
`;

export default ProjectPost;
