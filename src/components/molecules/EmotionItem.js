import styled from 'styled-components';
import EmotionIcon from '../atoms/EmotionIcon';
import LabelText from '../atoms/LabelText';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6px;       
  cursor: pointer;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.05);
  }

  &.selected ${EmotionIcon} {
    box-shadow: 0 0 0 3px #b881c2;
  }
`;

export default function EmotionItem({ mood, emoji, label, selected, onClick }) {
  return (
    <Wrap className={selected ? 'selected' : ''} onClick={onClick}>
      <EmotionIcon mood={mood} emoji={emoji} />
      <LabelText>{label}</LabelText>
    </Wrap>
  );
}