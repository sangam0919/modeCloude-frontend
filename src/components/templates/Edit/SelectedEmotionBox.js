import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmotionIcon from '../../atoms/EmotionIcon'; // emoji 렌더링용
import useEmotion from '../../../hooks/useEmotion'; // 전체 감정 리스트

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

export default function SelectedEmotionBox({ diary }) {
  const { emotions } = useEmotion();
  const [emotion, setEmotion] = useState(null);

  useEffect(() => {
    if (!diary?.emotionLog?.userEmotion) return;

    const matched = emotions.find(e => e.id === diary.emotionLog.userEmotion);
    if (matched) {
      setEmotion({
        mood: matched.id,
        emoji: matched.emoji,
        label: matched.name,
      });
    }
  }, [diary, emotions]);

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
