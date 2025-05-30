import styled from 'styled-components';
import ChartCenterText from '../atoms/ChartCenterText';

const ChartWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DonutChart = () => (
  <ChartWrapper>
    <svg width="150" height="150" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r="15.91" fill="#fff" />
      <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#eee" strokeWidth="3" />
      <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#FFEAA7" strokeWidth="3" strokeDasharray="43 57" strokeDashoffset="0" />
      <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#C7CEEA" strokeWidth="3" strokeDasharray="29 71" strokeDashoffset="-43" />
      <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#FFD8BE" strokeWidth="3" strokeDasharray="14 86" strokeDashoffset="-72" />
      <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#A3D8F4" strokeWidth="3" strokeDasharray="14 86" strokeDashoffset="-86" />
    </svg>
    <ChartCenterText text="7일" />
  </ChartWrapper>
);

export default DonutChart;
