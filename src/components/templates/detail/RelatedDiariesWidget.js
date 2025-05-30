import React, { useEffect } from 'react';
import styled from 'styled-components';
import RelatedDiaryItem from '../../molecules/detail/RelatedDiaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowerDiary } from '../../../redux/actions/diary';
import { useNavigate } from 'react-router-dom';
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
  if (!arr || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, arr.length));
};

const getRandomMood = (diaries) => {
  const moods = diaries.map(d => d.emotion?.id?.toLowerCase()).filter(Boolean);
  const unique = [...new Set(moods)];
  const random = unique[Math.floor(Math.random() * unique.length)];
  return random;
};

const RelatedDiariesWidget = ({ currentMood }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { followerDiaries = [], loading } = useSelector((state) => state.diary); 

  useEffect(() => {
    dispatch(fetchFollowerDiary());
  }, [dispatch]);


  if (loading) return <div>불러오는 중...</div>;
  if (!followerDiaries || followerDiaries.length === 0) {
    console.log('followerDiaries가 비어 있음');
    return null;
  }

  const moodToUse = currentMood?.toLowerCase() || getRandomMood(followerDiaries);


  const related = followerDiaries.filter(
    (d) => d.emotion?.id?.toLowerCase() === moodToUse
  );

  const selected = getRandomItems(related, 3);

  if (selected.length === 0) return null;

  return (
    <Widget>
      <Title>관련 일기</Title>
      <List>
        {selected.map((item, i) => (
          <RelatedDiaryItem
            key={i}
            emoji={item.emotion?.emoji || '🙂'} 
            title={item.title}
            date={item.createdAt?.slice(0, 10)}
            onClick={() => navigate(`/detail/${item.id}`)}  
          />
        ))}
      </List>
    </Widget>
  );
};

export default RelatedDiariesWidget;
