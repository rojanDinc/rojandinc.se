import React from 'react';

import Layout from '../components/layout';
import HeadSection from '../components/HeadSection';
import Services from '../components/Services';
import Technologies from '../components/Technologies';

const IndexPage = ({ data }) => (
  <Layout>
    <HeadSection />
    {/* Services */}
    <Services />
    <Technologies />
  </Layout>
);

export default IndexPage;
