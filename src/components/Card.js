import * as React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 0.75rem;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  display: flex;
  flex-direction: column;
`;

const Card = ({ children, className }) => (
  <StyledCard className={className}>{children}</StyledCard>
);

export { Card };
