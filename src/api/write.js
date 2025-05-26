import axios from 'axios';
import { API_URL } from '../constants/api';

// ${API_URL} 이거 그거임 localhost:4000번 뺴놓은거 나중에 배포할때 저기서 값만 바꾸면되서 이렇게 함. 

// 업로드 
export const uploadImage = async (blob) => {
  const formData = new FormData();
  formData.append('image', blob);

  const res = await axios.post(`${API_URL}/write/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('서버에서 받은 이미지 URL:', res.data.url);
  return res.data.url;
};

// 다이어리 저장 
export const saveDiary = async (data) => {
  const res = await axios.post(`${API_URL}/write`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data;
};


// ai 매핑 버전 
// export const analyzeEmotion = async (content, emotionList) => {
//   try {
//     const response = await axios.post(`${API_URL}/write/analyze`, { content });
//     const result = response.data.emotion?.trim();

//     const aiEmotionMap = {
//       '기쁨': 'happy',
//       '행복함': 'happy',
//       '즐거움': 'happy',
//       '신남': 'excited',
//       '설렘': 'excited',
//       '감사함': 'grateful',
//       '감동': 'grateful',
//       '불안함': 'anxious',
//       '걱정': 'anxious',
//       '우울함': 'sad',
//       '슬픔': 'sad',
//       '외로움': 'sad',
//       '분노': 'angry',
//       '짜증': 'angry',
//       '지침': 'tired',
//       '무기력': 'tired',
//       '피곤함': 'tired',
//       '혼란스러움': 'confused',
//       '혼란': 'confused',
//       '지루함': 'tired',
//       '차분함': 'calm',
//       '평온함': 'calm',
//       '당황' : 'confused'
//     };

//     emotionList.forEach(({ name, id }) => {
//       aiEmotionMap[name.trim()] = id;
//     });

//     // console.log('[디버깅] AI 감정 분석 결과:', result);
//     // console.log('[디버깅] 자동 생성된 매핑:', aiEmotionMap);

//     const mapped = aiEmotionMap[result];
//     if (!mapped) {
//       console.warn(`⚠️ '${result}' 감정은 DB에 매핑된 값이 없습니다.`);
//       return null;
//     }

//     return mapped;

//   } catch (error) {
//     console.error('감정 분석 실패:', error);
//     return null;
//   }
// };

// 이건 그냥 무슨 AI한테 넣어서 하는버전
export const analyzeEmotion = async (content) => {
  try {
    const response = await axios.post(`${API_URL}/write/analyze`, { content });
    const result = response.data.emotion?.trim();

    console.log('[디버깅] AI 감정 분석 결과:', result);
     
    if (!result) {
      console.warn('⚠️ 감정 분석 결과가 비어 있습니다.');
      return null;
    }

    return result;  // 그대로 반환

  } catch (error) {
    console.error('감정 분석 실패:', error);
    return null;
  }
};

