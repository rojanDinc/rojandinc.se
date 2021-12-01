import * as React from "react";
import PropTypes from "prop-types";

const Title = ({ size = "base", children }) => (
  <div className="mb-3">
    <span className={`font-black text-${size}`}>{children}</span>
  </div>
);

Title.propTypes = {
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ]),
};

export { Title };
