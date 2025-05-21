import Arrow from '../../atoms/Arrow';
import styled from 'styled-components';

const Wrap=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:12px;
`;

export default ({label,onPrev,onNext})=>(
  <Wrap>
    <span style={{fontWeight:600}}>{label}</span>
    <div>
      <Arrow onClick={onPrev}>◀</Arrow>
      <Arrow onClick={onNext}>▶</Arrow>
    </div>
  </Wrap>
);