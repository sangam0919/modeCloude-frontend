import React from 'react';
import styled from 'styled-components';

const emotionStyles = {
  happy: { background: '#ffe066', emoji: '😊', label: '행복' },
  sad: { background: '#a0c4ff', emoji: '😢', label: '슬픔' },
  angry: { background: '#ff6b6b', emoji: '😠', label: '분노' },
  calm: { background: '#caffbf', emoji: '😌', label: '평온' },
  tired: { background: '#bdb2ff', emoji: '🥱', label: '피곤' },
  excited: { background: '#ffd6a5', emoji: '🤩', label: '설렘' },
  anxious: { background: '#ffc6ff', emoji: '😰', label: '불안' },
  confused: { background: '#d0f4de', emoji: '😕', label: '혼란' }
};

const Emotions = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg || '#eee'};
`;

const Emotion = ({ type }) => {
  const emotion = emotionStyles[type] || {};
  return <Emotions bg={emotion.background}>{emotion.emoji || '❓'}</Emotions>;
};

 const getEmotionLabel = (type) => {
  return emotionStyles[type]?.label || '';
};
 const getEmotionColor = (type) => {
  return emotionStyles[type]?.background || '#ccc';
};
 const getEmotionEmoji = (type) => {
  return emotionStyles[type]?.emoji || '❓';
};
export { getEmotionColor, getEmotionLabel, getEmotionEmoji };

export default Emotion;
