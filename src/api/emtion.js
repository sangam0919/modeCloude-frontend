import axios from 'axios'

export const MainEmotion = async () => {
    const {data} = await axios.get('http://localhost:4000/main/emotionAll')
    return data;
}