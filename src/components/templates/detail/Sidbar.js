// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import WeatherWidget from '../../templates/main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import Profile from './Profile';
import RelatedDiariesWidget from './RelatedDiariesWidget';

const Aside = styled.aside`
display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar() {
  const weather = useWeather('Seoul');
  return (
    <Aside>
        <Profile />
      <WeatherWidget weather={weather} />
      <RelatedDiariesWidget currentMood="calm" />
    </Aside>
  );
}
