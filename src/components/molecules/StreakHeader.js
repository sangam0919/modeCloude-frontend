import Counter from '../atoms/Count';
import Icon from '../atoms/Icon';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
`;

const getIconSizeByStreak = (streak) => {
  if (streak = 1) return 5;
  if (streak = 2) return 10;
  if (streak = 3) return 15;
  if (streak = 4) return 25;
  if (streak = 5) return 30;
  if (streak = 6) return 40;
  if (streak = 7) return 50;
  return 24;
};

export default ({ streak }) => {
  const iconSize = getIconSizeByStreak(streak);

  return (
    <Wrap>
      <div style={{ textAlign: 'center' }}>
        <Counter>{streak}</Counter>
        <div style={{ fontSize: '.9rem', color: '#888' }}>일 연속</div>
      </div>
      <Icon size={iconSize}>🔥</Icon>
    </Wrap>
  );
};
