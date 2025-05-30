import axios from 'axios'
import { API_URL } from '../constants/api';

// 내일기 
export const fetchMyDiaries = async () => {
    const res = await axios.get(`${API_URL}/main/mydiary`, {
      withCredentials: true, 
    });
    return res.data;
  };

  // 공개된 이거 로그인사용자를 잘못걸어놔서 만듬 
export const getPublicDiaries = async (uid) => {
  const res = await axios.get(`${API_URL}/mypage/public/${uid}`);
  return res.data;
};

  
// 팔로우 된 애들만
export const getfollowerDiaries = async (data) => {
  const res = await axios.get(`${API_URL}/main/diary/followed`, {
    withCredentials: true, 
  });
  console.log('getfollowerDiaries 응답 데이터:', res.data);
  return res.data;
}

  // 감정 저장 
  export const saveEmotionOnly = async (data) => {
    const res = await axios.post(`${API_URL}/main/emotionOnly`, data);
    console.log('asdsadsadsadsadsadsadsadsadsad',data);
    return res.data;
  };


// 오늘 감정 또는 일기 작성 여부 확인
export const checkTodayWritten = async ({excludeId}) => {

  const res = await axios.get(`${API_URL}/main/checkTodayWritten?excludeId=${excludeId}`, {
    withCredentials: true,
  });
  return res.data; 
};

// 스트림 연속 
export const fetchStreak = async (uid) => {
  const res = await axios.get(`${API_URL}/main/streak?uid=${uid}`, {
    withCredentials: true, 
  });
  return res.data.streak;
};

// 요일
export const fetchWrittenWeekdays = async (uid) => {
  const res = await axios.get(`${API_URL}/main/written-weekdays?uid=${uid}`, {
    withCredentials: true, 
  });
  return res.data.weekdays;
};

// 날짜
export const fetchWrittenDates = async (month, uid) => {
  const res = await axios.get(`${API_URL}/main/written-dates?month=${month}&uid=${uid}`, {
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

// 일기 삭제 
export const deleteDiary = async (id, data) => {
  const res = await axios.delete(`${API_URL}/detail/delete/${id}`, {
    data: data,
  })
  return res.data;
}





