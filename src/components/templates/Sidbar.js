// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import StreakWidget from './StreakWidget';
import WeatherWidget from './WeatherWidget';
import useWeather from '../../hooks/useWeather';
import EmotionStatsWidget from './EmotionStatsWidget';
// import WeatherWidget from './WeatherWidget';
// import StatsWidget   from './StatsWidget';

const Aside = styled.aside`
display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar() {
  const weather = useWeather('Seoul');
  return (
    <Aside>
      <StreakWidget
        streak={7}
        weekDone={['월','화','수','목','금','토']}
        diaryDates={[26,27,28,29,30]}
        today={new Date(2025,2,30)}
      />

      {/* 나중에 날씨·통계 위젯 추가 */}
      <WeatherWidget weather={weather} />
      <EmotionStatsWidget />
    </Aside>
  );
}
