import styled from 'styled-components';
import DiaryCard from './DiaryCard';

const Grid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:30px;

    @media(max-width:768px){
      grid-template-columns:1fr;
    }
`;

export default function DiaryGrid({ diaries }) {
  return (
    <Grid>
      {diaries.map(d=>(
        <DiaryCard key={d.id} {...d}/>
      ))}
    </Grid>
  );
}