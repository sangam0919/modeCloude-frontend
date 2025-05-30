// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import StreakWidget from '../mypage/StreakWidget.js';
import WeatherWidget from '../mypage/WeatherWidget.js';
import useWeather from '../../../hooks/useWeather';
// import WeatherWidget from './WeatherWidget';
// import StatsWidget   from './StatsWidget';
import useMainInfo from '../../../hooks/useMainInfo.js';

const Aside = styled.aside`
display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar({ uid }) {
  const weather = useWeather('Seoul');
  const { streak, weekDone, diaryDates } = useMainInfo(uid);

  return (
    <Aside>
      <StreakWidget
        streak={streak}
        weekDone={weekDone} 
        diaryDates={diaryDates}
        today={new Date()}
      />

      <WeatherWidget weather={weather} />
    </Aside>
  );
}
