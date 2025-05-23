import axios from 'axios'
import { API_URL } from '../constants/api';

export const MainEmotion = async () => {
    const {data} = await axios.get(`${API_URL}/main/emotionAll`)
    return data;
}