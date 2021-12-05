import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Navbar } from "../components";

class Post {
  constructor(slug, title, postDate) {
    this.slug = slug;
    this.title = title;
    this.postDate = postDate;
  }

  static createPost(obj) {
    return new Post(obj.slug, obj.title, new Date(obj.date));
  }
}

export default function Blog({ data }) {
  console.log(data);
  const posts = data.allMarkdownRemark.edges
    .map((edge) => Post.createPost(edge.node.frontmatter))
    .sort((a, b) => b.postDate.getTime() - a.postDate.getTime());

  const renderPost = (post, i) => (
    <Col key={i} xs={12}>
      <a href={post.slug}>
        <div>
          {post.title} - {post.postDate.toLocaleDateString()}
        </div>
      </a>
    </Col>
  );

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Blog</h1>
            <p>Lorem ipsum dolor sit.</p>
          </Col>
        </Row>
        <Row>{posts.map(renderPost)}</Row>
      </Container>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;
