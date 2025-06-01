import Circle from '../atoms/Circle';
import styled from 'styled-components';
const Bar=styled.div`display:flex;gap:6px;justify-content:center;margin:8px 0 14px;`;
export default ({done})=>{
  const w=['월','화','수','목','금','토','일'];
  return (
    <Bar>{w.map(d=>
      <Circle key={d}
              variant={done.includes(d)?'fill':d==='일'?'dash':undefined}>
        {d}
      </Circle>)}
    </Bar>
  );
};