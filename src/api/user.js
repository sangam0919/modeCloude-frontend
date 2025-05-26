import axios from "axios";
import { API_URL } from '../constants/api';

// 이것도 왜이렇게 했지 
export const userLogin = async () => {
    const {data} = await axios.get(`${API_URL}/login/kakao`)
    return data;
}

