import axios from "axios";
import { API_URL } from '../constants/api';

export const userLogin = async () => {
    const {data} = await axios.get(`${API_URL}/login/kakao`)
    return data;
}

