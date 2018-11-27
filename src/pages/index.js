import React from 'react';

import Layout from '../components/layout';
import HeadSection from '../components/HeadSection';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

/**
 * Home Page
 */
const IndexPage = ({ data }) => (
  <Layout>
    <HeadSection />
    <Services />
    <Technologies />
    <Projects />
  </Layout>
);

export default IndexPage;
