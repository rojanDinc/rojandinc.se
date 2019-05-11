import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { StaticQuery, graphql, Link } from 'gatsby';
import Masonry from 'react-masonry-css';
import HorizontalLine from './HorizontalLine';
import styled from 'styled-components';
import theme from '../theme';

const StyledImage = styled.img`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { pagetype: { eq: "project-post" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                image
                path
              }
            }
          }
        }
      }
    `}
    render={data => {
      const edges = data.allMarkdownRemark.edges;
      const breakpointColumnsObj = {
        default: 4,
        992: 3,
        768: 2,
        576: 1,
      };
      return (
        <Container className="my-5">
          <Row>
            <Col xs="12">
              <div className="d-inline-block">
                <h2 className="h1">Projekt</h2>
                <HorizontalLine />
              </div>
            </Col>
            <Col xs="6">
              <p style={{ color: theme.lighterColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget condimentum ipsum. Nullam dapibus odio urna, eget bibendum
                velit euismod eu.
              </p>
            </Col>
            <Col xs="6" />
          </Row>
          <Row>
            <Col xs="12">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {edges.map((item, index) => {
                  let height;
                  if (index % 2 === 0) height = 300;
                  else if (index % 3 === 0) height = 220;
                  else height = 350;
                  return (
                    <Link
                      key={item.node.id}
                      to={'/projects/' + item.node.frontmatter.path}
                    >
                      <StyledImage
                        className="w-100"
                        src={`https://via.placeholder.com/200x${height}`}
                        alt="project"
                      />
                    </Link>
                  );
                })}
              </Masonry>
            </Col>
          </Row>
        </Container>
      );
    }}
  />
);

export default Projects;
