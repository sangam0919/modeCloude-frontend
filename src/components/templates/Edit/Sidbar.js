// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import WeatherWidget from '../main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import EmotionAi from './EmotionAi';
import Lock from '../../molecules/edit/Lock'
import SelectedEmotionBox from './SelectedEmotionBox';

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar({mood,emoji,label}) {
  const weather = useWeather('Seoul');

  return (
    <Aside>
      <SelectedEmotionBox mood={mood} emoji={emoji} label={label} />
      <EmotionAi />
      <WeatherWidget weather={weather} />
      <Lock />
    </Aside>
  );
}
