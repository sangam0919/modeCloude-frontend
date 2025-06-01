import styled from 'styled-components';
import EmotionItem from '../molecules/EmotionItem';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;                
    margin-top: 10px;         
`;

export default function EmotionGrid({ items, selected, onSelect }) {
  return (
    <Grid>
      {items.map((item) => (
        <EmotionItem
          key={item.mood}
          {...item}
          selected={selected === item.mood}
          onClick={() => onSelect(item.mood)}
        />
      ))}
    </Grid>
  );
}