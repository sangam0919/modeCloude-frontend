// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import StreakWidget from '../main/StreakWidget';
import WeatherWidget from '../main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import EmotionStatsWidget from './EmotionStatsWidget';
// import WeatherWidget from './WeatherWidget';
// import StatsWidget   from './StatsWidget';
import useMainInfo from '../../../hooks/useMainInfo.js';

const Aside = styled.aside`
display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar() {
  const weather = useWeather('Seoul');
  const { streak, weekDone, diaryDates } = useMainInfo();


  console.log("streak", streak);
  console.log("weekDone", weekDone); // ['월', '화', ...]
  console.log("diaryDates", diaryDates); // [숫자 날짜만 있어야 함]
  return (
    <Aside>
      <StreakWidget
        streak={streak}
        weekDone={weekDone}
        diaryDates={diaryDates}
        today={new Date()}
      />

      <WeatherWidget weather={weather} />
      <EmotionStatsWidget />
    </Aside>
  );
}
