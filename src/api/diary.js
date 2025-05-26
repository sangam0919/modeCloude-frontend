import axios from 'axios'
import { API_URL } from '../constants/api';


// 내일기 
export const fetchMyDiaries = async () => {
    const res = await axios.get(`${API_URL}/main/mydiary`, {
      withCredentials: true, 
    });
    console.log('📡 [getMyDiaries] 응답 데이터:', res.data);
    return res.data;
  };

  
export const getfollowerDiaries = async (data) => {
  const res = await axios.get(`${API_URL}/main/diary/followed`, {
    withCredentials: true, 
  });
  console.log('[getfollowerDiaries] 응답 데이터:', res.data);
  return res.data;
}

  // 감정 저장 
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
    withCredentials: true, 
   });
  return res.data.streak;
};

// 요일 
export const fetchWrittenWeekdays = async () => {
  const res = await axios.get(`${API_URL}/main/written-weekdays`, {
    withCredentials: true, 
  });
  return res.data.weekdays;
};

// 날짜 
export const fetchWrittenDates = async (month) => {
  const res = await axios.get(`${API_URL}/main/written-dates?month=${month}`, {
    withCredentials: true, 
  });
  return res.data;
};

// 상세 조회, 수정 조회 , 댓글 조회 
export const getDiaryDetail = async (id) => {
  const res = await axios.get(`${API_URL}/detail/${id}`, {
    withCredentials: true,
  });
  return res.data;
};

// 수정 저장
export const updateDiary = async (id, data) => {
  const res = await axios.put(`${API_URL}/edit/${id}`, data, {
    withCredentials: true,
  });
  return res.data;
};

// 댓글 저장 
export const createComment = async (data) => {
  console.log('asdassddsadd:', data);
  const res = await axios.post(`${API_URL}/detail/createComment`, data, {
    headers: { 'Content-Type': 'application/json' }
  });
  return res.data;
}
