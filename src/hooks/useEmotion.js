import { useEffect, useState } from "react";
import { MainEmotion } from "../api/emtion";
 const useEmtion = () => {
    const [selected, setSelected] = useState(null);
    const [emotions, setEmotions] = useState([])
   
    useEffect(() => {
      const fetchEmotions = async () => {
        try {
          const data = await MainEmotion();
          setEmotions(data);
        } catch (err) {
          console.error('감정 가져오기 실패:', err);
        }
      };
      fetchEmotions();
    }, []);
    return { emotions, setEmotions, setSelected, selected };
}
export default useEmtion;
