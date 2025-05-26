import axios from 'axios'
import { API_URL } from '../constants/api';

// 메인 감정 ㅋㅋ 왜이렇게 했지
export const MainEmotion = async () => {
    const {data} = await axios.get(`${API_URL}/main/emotionAll`)
    return data;
}