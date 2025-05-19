// molecules/RelatedDiaryItem.js
import React from 'react';
import styled from 'styled-components';
import Circle from '../../atoms/Circle';

const Item = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const RelatedDiaryItem = ({ emoji, title, date }) => {
  return (
    <Item>
      <Circle size={40} variant="fill">{emoji}</Circle>
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Content>
    </Item>
  );
};

export default RelatedDiaryItem;
