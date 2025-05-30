import EmotionIcon from '../../atoms/EmotionIcon';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: ${({ $color }) => $color || 'transparent'};
    transform: scale(0.85); 
    transform-origin: top left; 
`;

const Label = styled.span`
  font-size: 1.5rem;
  color: #555;
  font-weight: 500;
  position: relative;
  top: 1px; 
`;

export default function EmotionIconWithLabel({ emoji, mood, label, color, ...rest }) {
  return (
    <Wrap>
      <EmotionIcon emoji={emoji} mood={mood} color={color} diameter={28} fontSize={16} {...rest} />
      <Label $color={color}>{label}</Label>
    </Wrap>
  );
}
