import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;  
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;     
    flex-direction: column; 
    gap: 20px;
  }
`;

export default function LayoutTwoCols({ left, right }) {
  return (
    <Grid>
      <div>{left}</div>
      <div>{right}</div>
    </Grid>
  );
}
