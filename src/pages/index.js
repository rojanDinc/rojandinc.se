import React from 'react';
import { Link, graphql } from 'gatsby';
import { Col, Row, Container } from 'reactstrap';

import Layout from '../components/layout';
import HeadSection from '../components/HeadSection/HeadSection';
import Services from '../components/Services/Services';

const IndexPage = ({ data }) => (
  <Layout>
    <HeadSection />
    {/* Services */}
    <Container className="my-5">
      <Services />
    </Container>
  </Layout>
);

export default IndexPage;
