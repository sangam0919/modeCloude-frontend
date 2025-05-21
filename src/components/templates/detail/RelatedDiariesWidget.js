// templates/RelatedDiariesWidget.js
import React from 'react';
import styled from 'styled-components';
import RelatedDiaryItem from '../../molecules/detail/RelatedDiaryItem';
import { allDiaries } from '../../../hooks/simpleData'
const Widget = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;




const getRandomItems = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getRandomMood = (diaries) => {
  const moods = [...new Set(diaries.map(d => d.mood))]; // 중복 제거
  return moods[Math.floor(Math.random() * moods.length)];
};


  const RelatedDiariesWidget = () => {
  const randomMood = getRandomMood(allDiaries);
  const related = allDiaries.filter((d) => d.mood === randomMood);
  const selected = getRandomItems(related, 3);


  return (
    <Widget>
      <Title>관련 일기</Title>
      <List>
        {selected.map((item, i) => (
          <RelatedDiaryItem key={i} emoji={item.emoji} title={item.title} date={item.date} />
        ))}
      </List>
    </Widget>
  );
};

export default RelatedDiariesWidget;
