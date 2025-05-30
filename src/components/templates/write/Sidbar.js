// src/components/templates/Sidebar.jsx
import styled from 'styled-components';
import WeatherWidget from '../main/WeatherWidget';
import useWeather from '../../../hooks/useWeather';
import EmotionAi from './EmotionAi';
import Lock from '../../molecules/edit/Lock'
import SelectedEmotionBox from './SelectedEmotionBox';
import { useLocation } from 'react-router-dom';

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export default function Sidebar({ setSelectedEmotion, setAiEmotion,isPublic, setIsPublic, aiEmotion, selectedEmotion }) {
  const weather = useWeather('Seoul');
  const location = useLocation();
  const isWritePage = location.pathname === '/write';
  console.log('Sidebar에 전달된 isPublic:', isPublic);
  return (
    <Aside>
      {isWritePage && (
        <SelectedEmotionBox setSelectedEmotion={setSelectedEmotion} />
      )}
      <EmotionAi 
        selected={selectedEmotion}
        setSelected={setSelectedEmotion}
        aiEmotion={aiEmotion}
        setAiEmotion={setAiEmotion}
      />
      <WeatherWidget weather={weather} />
      <Lock isPublic={isPublic} setIsPublic={setIsPublic} />
     
      
    </Aside>
  );
}
