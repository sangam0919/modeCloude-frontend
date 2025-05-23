import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import EmotionIcon from '../../atoms/EmotionIcon';

const Box = styled.div`
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MoodText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

const SubText = styled.span`
  font-size: 0.85rem;
  color: #888;
`;

export default function SelectedEmotionBox({ setSelectedEmotion }) {
  const location = useLocation();
  const [emotion, setEmotion] = useState(null);

  useEffect(() => {
    // console.log('현재 URL:', window.location.href); 
    const params = new URLSearchParams(location.search);
    const mood = params.get('mood');
    const emoji = params.get('emoji');
    const label = params.get('label');

    console.log(' 쿼리스트링 확인:', { mood, emoji, label });

    if (mood && emoji && label) {
      const emotionObj = { mood, emoji, label };
      setEmotion(emotionObj); 
      setSelectedEmotion(emotionObj); 
    }
    
  }, [location, setSelectedEmotion]);

  if (!emotion) return null;

  return (
    <Box>
      <EmotionIcon mood={emotion.mood} emoji={emotion.emoji} diameter={48} fontSize={24} />
      <TextGroup>
        <MoodText>{emotion.label}</MoodText>
        <SubText>내가 선택한 감정</SubText>
      </TextGroup>
    </Box>
  );
}
