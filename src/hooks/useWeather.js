import { useEffect, useState } from 'react';
import axios from 'axios';

const getWeatherEmoji = (main) => {
  switch (main) {
    case 'Clear': return '☀️';
    case 'Clouds': return '☁️';
    case 'Rain': return '🌧️';
    case 'Snow': return '🌨️';
    case 'Thunderstorm': return '⛈️';
    case 'Mist':
    case 'Fog':
    case 'Smoke': return '🌫️';
    default: return '❓';
  }
};

const useWeather = (location = 'Seoul') => {
  const [weather, setWeather] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=kr`;
        console.log('🌍 요청 URL:', url);

        const res = await axios.get(url);
        const data = res.data;

        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          emoji: getWeatherEmoji(data.weather[0].main),
          location: data.name,
          main: data.weather[0].main
        });
      } catch (err) {
        console.error('❌ 날씨 API 에러:', err.response?.status, err.message);
      }
    };

    if (API_KEY) {
      fetchWeather();
    } else {
      console.error('❗ API 키가 존재하지 않습니다. .env 파일을 확인하세요.');
    }
  }, [location, API_KEY]);

  return weather;
};

export default useWeather;
