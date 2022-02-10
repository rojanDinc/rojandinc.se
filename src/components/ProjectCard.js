import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Card } from ".";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { formatDateRange } from "../util";

const Img = styled(GatsbyImage)`
  border-radius: 0.75rem;
  max-width: 6rem;
`;

const ProjectCard = ({
  title,
  fromDate,
  toDate,
  workRole,
  image,
  imageAlt,
  link,
  children,
  current,
}) => {
  return (
    <Card className="p-4">
      <Row>
        <Col xs={12}>
          <Img className="mb-2" style={{ borderRadius: "0.75rem"}} image={getImage(image)} alt={imageAlt} />
        </Col>
        <Col xs={12}>
          <Link className="project-link" to={link}>
            <span className="font-bold text-lg">
              {title} - <i>{workRole}</i>
            </span>
          </Link>
        </Col>
        <Col xs={12}>
          <span>{formatDateRange(fromDate, toDate, current)}</span>
        </Col>
        <Col xs={12}>
          <p>{children}</p>
        </Col>
      </Row>
    </Card>
  );
};

export { ProjectCard };
