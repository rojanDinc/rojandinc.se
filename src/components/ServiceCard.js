import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faMobileAlt,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

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

const ServiceCard = ({ serviceType, title, excerpt }) => {
  return (
    <div
      style={styles.container}
      className="d-flex flex-column justify-content-center align-items-center w-100 mb-3"
    >
      <div className="w-100">
        <span>{typeChecker(serviceType)}</span>
        <p>{title}</p>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 320,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 30,
    boxShadow: '0px 1px 10px 0px rgba(122,122,122,1)',
  },
};

export default ServiceCard;
