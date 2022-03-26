import * as React from 'react';

import { Layout, Card, Title } from '../components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Layout>
      <Row>
        <Col>
          <Title size="4xl">Contact</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-3">
            <Col xs={12}>
              <FontAwesomeIcon className="w-25" icon={faGithub} /> <a target="_blank" href="https://github.com/rojanDinc">Github</a>
            </Col>
            <Col xs={12}>
              <FontAwesomeIcon className="w-25" icon={faLinkedinIn} />{' '}
              <a target="_blank" href="https://www.linkedin.com/in/rojan-dinc-719827141/">LinkedIn</a>
            </Col>
            <Col xs={12}>
              <FontAwesomeIcon className="w-25" icon={faAt} /> <a target="_blank" href="mailto:rojand94@gmail.com">rojand94@gmail.com</a>
            </Col>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
