import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faMobileAlt,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const typeChecker = type => {
  switch (type) {
    case 'web':
      return <FontAwesomeIcon icon={faDesktop} />;
    case 'system':
      return <FontAwesomeIcon icon={faCogs} />;
    case 'mobile':
      return <FontAwesomeIcon icon={faMobileAlt} />;
    default:
      return <FontAwesomeIcon icon={faDesktop} />;
  }
};

const ServiceCard = ({ serviceType, title, excerpt, imgAlt, imgSrc, id }) => {
  const styles = {
    container: {
      minHeight: 320,
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 30,
      background: `url('${imgSrc}')`,
      backgroundSize: 'cover',
    },
  };
  return (
    <StyledCard style={styles.container} className="mb-3 element-shadow">
      <div className="w-100">
        <span className="text-light">
          {serviceType && typeChecker(serviceType)}
        </span>
        <p className="text-light h4">{title && title}</p>
        <p className="text-light">{excerpt && excerpt}</p>
      </div>
    </StyledCard>
  );
};

export default ServiceCard;
