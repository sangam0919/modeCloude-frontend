import axios from 'axios'
import { API_URL } from '../constants/api';

export const fetchMyDiaries = async () => {
    const res = await axios.get(`${API_URL}/main/mydiary`, {
      withCredentials: true, 
    });
    return res.data;
  };

  export const saveEmotionOnly = async (data) => {
    const res = await axios.post(`${API_URL}/main/emotionOnly`, data);
    return res.data;
  };


// 오늘 감정 또는 일기 작성 여부 확인
export const checkTodayWritten = async () => {
  const res = await axios.get(`${API_URL}/main/checkTodayWritten`, {
    withCredentials: true,
  });
  return res.data; 
};