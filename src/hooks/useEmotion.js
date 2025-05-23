import { useEffect, useState } from "react";
import { MainEmotion } from "../api/emtion"; // 이 경로는 그대로 두고

const useEmotion = () => {
  const [selected, setSelected] = useState(null);
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const data = await MainEmotion();
        setEmotions(data);
      } catch (err) {
        console.error("감정 가져오기 실패:", err);
      }
    };
    fetchEmotions();
  }, []);

  const setEmotionByLabel = (name) => {
    const match = emotions.find((e) => e.name === name);
    if (match) {
      setSelected(match.id);
    } else {
      console.warn(`❗ 감정 '${name}'을 emotions에서 찾을 수 없습니다.`);
    }
  };

  return { emotions, setEmotions, selected, setSelected, setEmotionByLabel };
};

export default useEmotion;
