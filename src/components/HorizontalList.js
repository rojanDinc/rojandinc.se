import React from 'react';
import styled from 'styled-components';

const TechItem = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
  display: inline-block;
  padding: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  }
`;

const InvisibleTechItem = styled.div`
  width: 90px;
  height: 100px;
  display: inline-block;
  visibility: hidden;
`;

const TechContainer = styled.div`
  padding: 10px;
  overflow: auto;
  white-space: nowrap;
`;

const HorizontalList = ({ items }) => {
  return (
    <div className="w-100">
      <TechContainer>
        <InvisibleTechItem key={'init'} />
        {items &&
          items.map(item => (
            <TechItem key={item.node.id}>
              <img
                src={item.node.frontmatter.image}
                alt={item.node.frontmatter.alt}
              />
            </TechItem>
          ))}
      </TechContainer>
    </div>
  );
};

export default HorizontalList;
