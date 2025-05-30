// src/components/templates/Sidebar.jsx

import styled from 'styled-components';
import WeatherWidget from '../../templates/main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import Profile from '../../templates/detail/Profile';
import RelatedDiariesWidget from '../../templates/detail/RelatedDiariesWidget';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default function Sidebar({ diary }) {
  const weather = useWeather('Seoul');

  return (
    <Aside>
      <Profile diary={diary} />
      <WeatherWidget weather={weather} />
      <RelatedDiariesWidget />
    </Aside>
  );
}
