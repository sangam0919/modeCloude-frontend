// templates/RelatedDiariesWidget.js
import React from 'react';
import styled from 'styled-components';
import RelatedDiaryItem from '../../molecules/detail/RelatedDiaryItem';

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

// 더미 데이터
const allDiaries = [
  { emoji: '🤩', title: '벚꽃 축제 다녀온 날', date: '2024.04.12', mood: 'excited' },
  { emoji: '😌', title: '주말 한강 소풍', date: '2024.05.22', mood: 'calm' },
  { emoji: '😊', title: '봄비가 그친 후의 산책', date: '2025.03.15', mood: 'happy' },
  { emoji: '😊', title: '좋은 날의 기억', date: '2025.03.10', mood: 'happy' },
  { emoji: '😊', title: '햇살 가득한 오후', date: '2025.03.12', mood: 'happy' },
  { emoji: '😌', title: '차분한 오후', date: '2024.06.01', mood: 'calm' },
];

const getRandomItems = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RelatedDiariesWidget = ({ currentMood = 'happy' }) => {
  const related = allDiaries.filter((d) => d.mood === currentMood);
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
