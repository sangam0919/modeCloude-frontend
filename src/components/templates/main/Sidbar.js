import styled from 'styled-components';
import StreakWidget from '../main/StreakWidget';
import WeatherWidget from '../main/WeatherWidget';
import EmotionStatsWidget from './EmotionStatsWidget';
import useWeather from '../../../hooks/useWeather';
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
      <EmotionStatsWidget />
    </Aside>
  );
}
