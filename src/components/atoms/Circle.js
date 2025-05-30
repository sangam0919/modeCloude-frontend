import styled,{css} from 'styled-components';
export default styled.div`
  width:${({size=32})=>size}px;height:${({size=32})=>size}px;
  border-radius:50%;display:flex;justify-content:center;align-items:center;
  font-size:.8rem;user-select:none;
  ${({variant})=>variant==='fill' && css`background:#b881c2;color:#fff`}
  ${({variant})=>variant==='dash' && css`border:2px dashed #b881c2;color:#b881c2`}
`;