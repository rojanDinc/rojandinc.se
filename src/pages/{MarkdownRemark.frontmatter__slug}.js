import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { Divider, Layout } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
`;

const IconContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0.5rem;
`;

const AnchorIcon = ({ icon, href = "#" }) => (
  <IconContainer href={href}>
    <FontAwesomeIcon icon={icon} />
  </IconContainer>
);

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Styles>
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
            <div className="d-flex">
              <AnchorIcon icon={faCalendarAlt} />{" "}
              <div className="mt-1">
                {new Date(frontmatter.date).toLocaleDateString()}
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="d-flex justify-content-end">
              <AnchorIcon icon={faLinkedinIn} /> |{" "}
              <AnchorIcon icon={faFacebookF} /> |{" "}
              <AnchorIcon icon={faTwitter} />
            </div>
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
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`;
