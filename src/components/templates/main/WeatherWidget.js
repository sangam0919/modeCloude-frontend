import styled from 'styled-components';
import WeatherIcon from '../../molecules/main/WeatherIcon';
import WeatherInfo from '../../molecules/main/WeatherInfo';

const WidgetWrap = styled.div`
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 15px;
`;

const WeatherWidget = ({ weather }) => {
  if (!weather) return null;

  return (
    <WidgetWrap>
      <WeatherIcon main={weather.main} />
      <WeatherInfo
        temp={weather.temp}
        desc={weather.desc}
        location={`대한민국 ${weather.location}`}
      />
    </WidgetWrap>
  );
};

export default WeatherWidget;
