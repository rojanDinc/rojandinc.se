import React from "react";
import { graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { Divider, Layout } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css";

const Styles = styled.div`
  .blog-figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .blog-figure-image {
    max-width: 100%;
    width: fit-content;
    border-radius: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .blog-fig-caption {
    color: var(--light-primary);
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

  .copy-code-button {
    position: absolute;
    top: 0.50rem;
    right: 1.25rem;
    background: var(--darker-primary);
    padding: 5px 8px;
    border-radius: 6px;
    cursor: pointer;
  }

  .copy-code-button:hover {
    background: var(--light-primary);
  }
`;

const IconContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0.5rem;
`;

const AnchorIcon = ({ icon, target = "_self", href = "#" }) => (
  <IconContainer href={href} target={target}>
    <FontAwesomeIcon icon={icon} />
  </IconContainer>
);

const BlogPost = (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const onCopyClick = (copyId, copyButton) => {
    const content = document.getElementById(copyId);
    navigator.clipboard.writeText(content.innerText);

    copyButton.innerHTML = '<b>Copied!';
    setTimeout(() => {
      copyButton.innerHTML = '<b>Copy</b>';
    }, 2000);
  };

  const initCopyElements = () => {
    const preElements = document.querySelectorAll('pre');
    preElements.forEach((preEl, i) => {
      const copyId = `copy-${i}`;
      const copyButtonEl = document.createElement('div');
      copyButtonEl.innerHTML = `<b>Copy</b>`;
      copyButtonEl.classList = `copy-code-button`;
      copyButtonEl.setAttribute('copy-id', copyId);
      copyButtonEl.onclick = () => onCopyClick(copyId, copyButtonEl);
      preEl.firstChild.id = copyId;
      preEl.appendChild(copyButtonEl);
    });
  };

  const windowLocationHref = typeof window !== "undefined" ? window.location.href : null;

  React.useEffect(() => {
    hljs.highlightAll();
    initCopyElements();
  }, []);

  return (
    <Layout>
      <Styles>
        <Row>
          <Col>
            <div
              id="blog-post-content"
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
              <div className="mt-1">
                Published {new Date(frontmatter.date).toLocaleDateString()}
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="d-flex justify-content-end">
              <AnchorIcon
                icon={faLinkedinIn}
                target="_blank"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(windowLocationHref)}`}
              /> |{" "}
              <AnchorIcon
                icon={faFacebookF}
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(windowLocationHref)}`}
              /> |{" "}
              <AnchorIcon
                icon={faTwitter}
                target="_blank"
                href={`http://twitter.com/share?url=${encodeURIComponent(windowLocationHref)}`}
              />
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

export default BlogPost;
