// atoms/EmotionIcon.jsx
import styled from 'styled-components';

const moodColor = {
  happy: '#FFEAA7', sad: '#A3D8F4', angry: '#FFB7B7',
  calm:  '#B5EAD7', anxious: '#C7CEEA', tired: '#E2D8F3',
  excited: '#FFD8BE', confused: '#D8E2DC',
};

const Circle = styled.div`
  width: ${({diameter}) => diameter}px;
  height: ${({diameter}) => diameter}px;
  border-radius: 50%;
  background: ${({ bgColor, mood }) =>
    bgColor || moodColor[mood] || '#eee'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .25s;
  &:hover { transform: scale(var(--hover-scale,1.1)); }
`;

const Emoji = styled.span`
  font-size: ${({fontSize}) => fontSize}px;
  line-height: 1;          /* 세로 중앙 정확히 */
`;

export default function EmotionIcon({
  emoji      = '😊',
  mood,             // 감정용
  bgColor,          // 날씨용
  diameter   = 60,   // ⬅️ 원의 지름
  fontSize   = 20,   // ⬅️ 이모지 크기 (원보다 작게)
  hoverScale = 1.1,
  ...rest
}) {
  return (
    <Circle  mood={mood} bgColor={bgColor} diameter={diameter} style={{'--hover-scale':hoverScale}} {...rest}>
      <Emoji fontSize={fontSize}>{emoji}</Emoji>
    </Circle>
  );
}
