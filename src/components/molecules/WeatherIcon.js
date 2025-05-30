// WeatherIcon.jsx
import EmotionIcon from '../atoms/EmotionIcon';

const weatherColorMap = {
  Clear: '#FFEAA7',        // 맑음 - 연노랑
  Clouds: '#D8E2DC',       // 흐림 - 연회색
  Rain: '#A3D8F4',         // 비 - 파랑
  Snow: '#E2D8F3',         // 눈 - 보라빛 흰색
  Thunderstorm: '#FFB7B7', // 천둥 - 연빨강
  Mist: '#C7CEEA',
  Fog: '#C7CEEA',
  Haze: '#C7CEEA',
  Smoke: '#C7CEEA',
  Drizzle: '#B5EAD7',
  Default: '#D3D3D3'
};

const emojiMap = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Snow: '🌨️',
  Thunderstorm: '⛈️',
  Mist: '🌫️',
  Fog: '🌫️',
  Haze: '🌫️',
  Smoke: '🌫️',
  Drizzle: '🌦️',
  Default: '❓'
};

const WeatherIcon = ({ main }) => {
  const bgColor = weatherColorMap[main] || weatherColorMap.Default;
  const emoji = emojiMap[main] || emojiMap.Default;

  return <EmotionIcon bgColor={bgColor} emoji={emoji} diameter={60} fontSize={26} />;
};

export default WeatherIcon;
