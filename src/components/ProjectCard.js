import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Card } from ".";

const Img = styled.img`
  border-radius: 0.75rem;
  max-width: 6rem;
`;

const ProjectCard = ({
  title,
  fromDate,
  toDate,
  workRole,
  profileImage,
  imageAlt,
  children,
}) => {
  return (
    <Card className="p-4">
      <Row>
        <Col xs={12}>
          <Img className="mb-2" src={profileImage} alt={imageAlt} />
        </Col>
        <Col xs={12}>
          <span className="font-bold text-lg">
            {title} - <i>{workRole}</i>
          </span>
        </Col>
        <Col xs={12}>
          <span>
            {fromDate} - {toDate}
          </span>
        </Col>
        <Col xs={12}>
          <p>{children}</p>
        </Col>
      </Row>
    </Card>
  );
};

export { ProjectCard };
