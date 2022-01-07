import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledText = styled.div`
  background-color: #f2f2f2;
  color: #222;
  font-weight: 700;
  padding: 0.65rem 1.15rem;
  border-radius: 0.75rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

const Tag = ({ text }) => <StyledText>{text}</StyledText>;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Tag };
