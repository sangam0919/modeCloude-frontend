import EmotionIcon from '../../atoms/EmotionIcon';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
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

export default function EmotionIconWithLabel({ emoji, mood, label, ...rest }) {
  return (
    <Wrap>
      <EmotionIcon emoji={emoji} mood={mood} diameter={28} fontSize={16} {...rest} />
      <Label>행복</Label>
    </Wrap>
  );
}
