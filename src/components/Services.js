import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StaticQuery, graphql } from 'gatsby';
import ServiceCard from './ServiceCard';

const Services = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpServices {
            edges {
              node {
                id
                title
                featured_media {
                  source_url
                  alt_text
                }
                acf {
                  excerpt
                  en_content
                  en_title
                  en_excerpt
                  service_type
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container className="my-5">
            {/** Heading and text */}
            <Row>
              <Col xs="12">
                <div className="d-inline-block">
                  <h2 className="h1">Tjänster</h2>
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
            {/** Services grid */}
            <Row>
              {data.allWordpressWpServices.edges.map(edge => {
                return (
                  <Col xs="12" sm="6" key={edge.node.id}>
                    <ServiceCard
                      serviceType={edge.node.acf.service_type}
                      title={edge.node.title}
                      excerpt={edge.node.acf.excerpt}
                      imgAlt={edge.node.featured_media.alt_text}
                      imgSrc={edge.node.featured_media.source_url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      }}
    />
  );
};

export default Services;
