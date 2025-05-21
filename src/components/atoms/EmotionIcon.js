import styled from 'styled-components';

const moodColor = {
  happy: '#FFEAA7',
  sad: '#A3D8F4',
  angry: '#FFB7B7',
  calm: '#B5EAD7',
  anxious: '#C7CEEA',
  tired: '#E2D8F3',
  excited: '#FFD8BE',
  confused: '#D8E2DC',
};

const Circle = styled.div`
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  border-radius: 50%;
  background: ${({ color, bgColor, mood }) =>
    color || bgColor || moodColor[mood] || '#eee'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s;

  &:hover {
    transform: scale(var(--hover-scale, 1.1));
  }
`;

const Emoji = styled.span`
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 1; /* 세로 정렬 정확하게 */
`;

export default function EmotionIcon({
  emoji = '😊',
  mood,       // 감정 ID (ex: happy, sad 등)
  color,      // DB에서 받아온 color (우선 적용됨)
  bgColor,    // 날씨용 등 다른 용도
  diameter = 60,
  fontSize = 20,
  hoverScale = 1.1,
  ...rest
}) {
  return (
    <Circle
      mood={mood}
      color={color}
      bgColor={bgColor}
      diameter={diameter}
      style={{ '--hover-scale': hoverScale }}
      {...rest}
    >
      <Emoji fontSize={fontSize}>{emoji}</Emoji>
    </Circle>
  );
}
