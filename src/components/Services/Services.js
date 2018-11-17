import React from 'react';
import { Row, Col } from 'reactstrap';
import ServiceCard from '../ServiceCard';
import { StaticQuery, graphql } from 'gatsby';

const Services = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpServices {
            edges {
              node {
                wordpress_id
                acf {
                  excerpt
                  type_of_service
                }
                title
                content
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <React.Fragment>
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
              {data.allWordpressWpServices.edges.map(item => {
                return (
                  <Col xs="12" sm="6" key={item.node.wordpress_id}>
                    <ServiceCard
                      serviceType={item.node.acf.type_of_service}
                      title={item.node.title}
                      excerpt={item.node.excerpt}
                    />
                  </Col>
                );
              })}
            </Row>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Services;
