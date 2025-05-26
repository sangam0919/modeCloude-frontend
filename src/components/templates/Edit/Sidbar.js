import styled from 'styled-components';
import WeatherWidget from '../main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import EmotionAi from './EmotionAi';
import Lock from '../../molecules/edit/Lock';
import SelectedEmotionBox from './SelectedEmotionBox';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default function Sidebar({ diary, isPublic, setIsPublic, aiEmotion }) {
  const weather = useWeather('Seoul');

  return (
    <Aside>
      <SelectedEmotionBox diary={diary} />
      <EmotionAi aiEmotion={aiEmotion} /> 
      <WeatherWidget weather={weather} />
      <Lock isPublic={isPublic} setIsPublic={setIsPublic} />
    </Aside>
  );
}
