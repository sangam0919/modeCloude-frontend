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

// 스트릭
export const fetchStreak = async () => {
  const res = await axios.get(`${API_URL}/main/streak`, {
    withCredentials: true, // ✅ 꼭 필요함
  });
  return res.data.streak;
};

// 요일 
export const fetchWrittenWeekdays = async () => {
  const res = await axios.get(`${API_URL}/main/written-weekdays`, {
    withCredentials: true, // ✅ 꼭 필요함
  });
  return res.data.weekdays;
};

// 날짜 
export const fetchWrittenDates = async (month) => {
  const res = await axios.get(`${API_URL}/main/written-dates?month=${month}`, {
    withCredentials: true, // ✅ 꼭 필요함
  });
  return res.data;
};

// 상세 조회 
export const fetchDiaryDetail = async (id) => {
  const res = await axios.get(`${API_URL}/detail/${id}`, {
    withCredentials: true,
  });
  return res.data;
};
