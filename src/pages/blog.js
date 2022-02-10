import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { Card, Layout, Divider } from '../components';
import { groupBy } from '../util';
import styled from 'styled-components';

class PostModel {
  constructor(slug, title, postDate) {
    this.slug = slug;
    this.title = title;
    this.postDate = postDate;
  }

  static createPost(obj) {
    return new PostModel(obj.slug, obj.title, new Date(obj.date));
  }
}

const PostDate = styled.div`
  text-decoration: none;
`;

const Post = ({ post }) => (
  <Col xs={12} className="mb-3">
    <Link href={post.slug}>
      <Card className="p-3 d-flex flex-row justify-content-between">
        <div>{post.title}</div>
        <PostDate>{post.postDate.toLocaleDateString()}</PostDate>
      </Card>
    </Link>
  </Col>
);

const PostSection = ({ section }) => {
  const [year, collection] = section;
  const sortPosts = (a, b) => b.postDate.getTime() - a.postDate.getTime();

  return (
    <Row key={`${year}`} className="mb-4">
      <Col>
        <h3>{year}</h3>
      </Col>
      {collection.sort(sortPosts).map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </Row>
  );
};

const RENDER_POSTS = false;

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges.map((edge) => PostModel.createPost(edge.node.frontmatter));
  const groupedPosts = groupBy(posts, (post) => post.postDate.getFullYear());
  const sortSections = (a, b) => b[0] - a[0];

  return (
    <Layout>
      <Row>
        <Col xs={12}>
          <h1 className="font-bold">Blog posts</h1>
          <Divider />
        </Col>
      </Row>
      {RENDER_POSTS &&
        Object.entries(groupedPosts)
          .sort(sortSections)
          .map((section) => <PostSection section={section} />)}
      {!RENDER_POSTS && <p>No posts published yet.</p>}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "blog" } } }) {
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
