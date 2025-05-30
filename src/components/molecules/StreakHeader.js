import Counter from '../atoms/Count';
import Icon    from '../atoms/Icon';
import styled  from 'styled-components';

const Wrap=styled.div`display:flex;justify-content:center;align-items:center;gap:8px;margin:10px 0;`;
export default ({streak})=>(
  <Wrap>
    <div style={{textAlign:'center'}}>
      <Counter>{streak}</Counter>
      <div style={{fontSize:'.9rem',color:'#888'}}>일 연속</div>
    </div>
    <Icon size={40}>🔥</Icon>
  </Wrap>
);