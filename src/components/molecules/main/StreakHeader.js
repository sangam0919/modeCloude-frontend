import Counter from '../../atoms/Count';
import Icon from '../../atoms/Icon';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
`;
const getIconSizeByStreak = (streak) => {
  switch (streak) {
    case 0: return 0;
    case 1: return 15;
    case 2: return 20;
    case 3: return 25;
    case 4: return 30;
    case 5: return 35;
    case 6: return 38;
    case 7: return 50;
    default: return 24;
  }
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
