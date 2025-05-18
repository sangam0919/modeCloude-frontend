import styled from 'styled-components';

const Dot = styled.span`
  display:inline-block;
  width:8px; height:8px;
  border-radius:50%;
  background:${({color})=>color};
  margin-right:6px;
`;
// ...rest (props에 부분집합)
const EmotionDot = ({color = '#ccc' , ...rest}) => {
  return (
    <Dot color={color} {...rest} />
  )
}
export default EmotionDot
