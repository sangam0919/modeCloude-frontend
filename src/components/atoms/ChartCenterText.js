import styled from 'styled-components';

const CenterText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
`;

const ChartCenterText = ({ text }) => 
    <CenterText>{text}</CenterText>;

export default ChartCenterText;
