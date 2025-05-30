import styled from 'styled-components';
import EmotionItem from './EmotionItem';

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
        key={item.id}                     
        selected={selected === item.id}  
        onClick={() => onSelect(item.id)} 
        {...item}                       
        />
      ))}
    </Grid>
  );
}