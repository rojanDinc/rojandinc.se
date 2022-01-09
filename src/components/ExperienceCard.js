import React from "react";
import styled from "styled-components";
import { Card } from ".";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Img = styled.img`
  border-radius: 0.75rem;
  max-width: 5rem;
`;

const StyledSpan = styled.span`
  display: block;
  margin-bottom: 2px;
`;

const formatMonths = monthsCount => {
  const months = monthsCount % 12;
  const years = Math.floor(monthsCount / 12); 
  if (years > 0) {
    if (months > 0) return `${years} years ${months} months`;
    return `${years} years`;
  } else {
    return `${months} months`;
  }
};

const renderExperienceDuration = (startDate, endDate, isStillOngoing) => {
  const after = isStillOngoing ? new Date() : endDate;
  const diff = (after - startDate) / 86400000;
  if (diff <= 30) {
    return "1 month";
  } else {
    const months = Math.floor(diff / 30);
    return formatMonths(months);
  }
};

const renderDate = (date) => {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const ExperienceCard = ({
  title,
  image,
  imageAlt,
  employer,
  startDate,
  endDate,
  isCurrentEmployment,
  children
}) => (
  <Card className={`mb-3 p-4`}>
    <Row>
      <Col className="d-flex flex-column" xs={12}>
        <div className="d-flex mb-3">
          <div className="me-3">
            <Img src={image} alt={imageAlt} />
          </div>
          <div>
            <StyledSpan className="font-bold text-lg">{title}</StyledSpan>
            <StyledSpan className="text-md">{employer}</StyledSpan>
            <StyledSpan>
              {renderDate(startDate)}-
              {isCurrentEmployment ? "Current" : renderDate(endDate) || "N/A"}{" "}
              {String.fromCharCode(183)} {renderExperienceDuration(startDate, endDate, isCurrentEmployment)}
            </StyledSpan>
          </div>
        </div>
        <div>{children}</div>
      </Col>
    </Row>
  </Card>
);

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  image: PropTypes.any,
  imageAlt: PropTypes.string.isRequired,
  isCurrentEmployment: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

export { ExperienceCard };
