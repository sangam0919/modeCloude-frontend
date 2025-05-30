import styled from 'styled-components';
import ChartCenterText from '../../atoms/ChartCenterText';

const ChartWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DonutChart = ({ data = [] }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  return (
    <ChartWrapper>
      <svg width="150" height="150" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="15.91" fill="#fff" />
        <circle cx="21" cy="21" r="15.91" fill="transparent" stroke="#eee" strokeWidth="3" />
        {data.map((item, index) => {
          const ratio = item.value / total;
          const dashArray = `${(ratio * 100).toFixed(2)} ${100 - (ratio * 100).toFixed(2)}`;
          const dashOffset = -cumulative * 100;
          cumulative += ratio;

          return (
            <circle
              key={index}
              cx="21"
              cy="21"
              r="15.91"
              fill="transparent"
              stroke={item.color}
              strokeWidth="3"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </svg>
      <ChartCenterText text="7일" />
    </ChartWrapper>
  );
};

export default DonutChart;
