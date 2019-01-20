import React from 'react';

const HorizontalList = ({ items }) => {
  const styles = {
    card: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
      display: 'inline-block',
      padding: 20,
    },
    cardImage: {},
  };
  return (
    <div className="w-100">
      <div style={{ padding: 10, overflow: 'auto', whiteSpace: 'nowrap' }}>
        <div
          key={'init'}
          style={{ width: 90, height: 100, display: 'inline-block' }}
          className="invisible"
        >
          <img />
        </div>
        {items &&
          items.map(item => (
            <div
              key={item.node.id}
              style={styles.card}
              className="tech-item element-shadow"
            >
              <img
                src={item.node.featured_media.source_url}
                alt={item.node.featured_media.alt_text}
                style={styles.cardImage}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HorizontalList;
