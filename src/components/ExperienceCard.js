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

const ExperienceCard = ({
  title,
  image,
  imageAlt,
  employer,
  startDate,
  endDate,
  isCurrentEmployment,
}) => {
  const renderDate = (date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const renderExperienceDuration = () => {
    const now = new Date();
    const diff = startDate.getDate() - now.getDate();
    if (diff <= 30) {
      return "1 month";
    } else {
      return `${Math.floor(diff / 30)} months`;
    }
  };

  return (
    <Card className={`mb-5 p-4`}>
      <Row>
        <Col className="d-flex" xs={12}>
          <div className="me-3">
            <Img src={image} alt={imageAlt} />
          </div>
          <div>
            <StyledSpan className="font-bold text-lg">{title}</StyledSpan>
            <StyledSpan className="text-md">{employer}</StyledSpan>
            <StyledSpan>
              {renderDate(startDate)}-
              {isCurrentEmployment ? "Current" : renderDate(endDate) || "N/A"}{" "}
              {String.fromCharCode(183)} {renderExperienceDuration()}
            </StyledSpan>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

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
