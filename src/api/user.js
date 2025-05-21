import axios from "axios";


export const userLogin = async () => {
    const {data} = await axios.get('http://localhost:4000/login/kakao')
    return data;
}

