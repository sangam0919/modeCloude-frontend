// src/components/molecules/WeatherInfo.jsx
import styled from 'styled-components';

const Info = styled.div`
  flex: 1;
`;

const Temp = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
`;

const Desc = styled.div`
  color: #777;
  font-size: 0.9rem;
  margin-top: 3px;
`;

const Loc = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 3px;
`;

const WeatherInfo = ({ temp, desc, location }) => (
  <Info>
    <Temp>{temp}°C</Temp>
    <Desc>{desc}</Desc>
    <Loc>{location}</Loc>
  </Info>
);

export default WeatherInfo;
