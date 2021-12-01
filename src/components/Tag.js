import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledText = styled.span`
  background-color: #f2f2f2;
  color: #222;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 0.75rem;
`;

const Tag = ({ text }) => (
  <div>
    <StyledText>{text}</StyledText>
  </div>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Tag };
