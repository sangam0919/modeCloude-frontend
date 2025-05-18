import styled from 'styled-components';

/* 그리드 – 3 : 1 비율 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;   /* 왼쪽 75%, 오른쪽 25% */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 20px; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;     /* 모바일-한-줄 */
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
