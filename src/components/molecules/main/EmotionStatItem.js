import styled from 'styled-components';
import EmotionDot from '../../atoms/EmotionDot';

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }

  span {
    margin-right: 6px;
    color: #666;
  }
`;

const EmotionStatItem = ({ label, count, color }) => (
  <Item>
    <EmotionDot color={color} />
    <span>{label}</span>
    <span>{count}</span>
  </Item>
);

export default EmotionStatItem;
