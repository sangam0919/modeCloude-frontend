import styled from 'styled-components';
import EmotionIcon from '../atoms/EmotionIcon';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export default function SelectedEmotionInfo({ mood, emoji, text }) {
  return (
    <Wrap>
      <EmotionIcon mood={mood} emoji={emoji} size={45} />
      <span style={{ marginLeft: 10 }}>{text}</span>
    </Wrap>
  );
}