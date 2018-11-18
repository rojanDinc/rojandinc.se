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

const ServiceCard = ({ serviceType, title, excerpt, imgAlt, imgSrc }) => {
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
    <div
      style={styles.container}
      className="d-flex flex-column justify-content-center align-items-center w-100 mb-3 element-shadow"
    >
      <div className="w-100">
        <span className="text-light">{typeChecker(serviceType)}</span>
        <p className="text-light h4">{title}</p>
        <p className="text-light">{excerpt}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
