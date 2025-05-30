import { saveDiary } from '../api/write';

const useWrite = () => {
  const handleSave = async ({ title, content, user_id, userEmotion, selectEmotion, is_public }) => {
    const diary_img = extractImageUrls(content); 
    const payload = {
      title,
      content,
      user_id,
      userEmotion,
      selectEmotion,
      diary_img,
      is_public: is_public ? 1 : 0,
    };
    console.log("payload 보내기 전 내용 확인:", payload); 
    const result = await saveDiary(payload);
    return result;
  };

  const extractImageUrls = (markdown) => {
    const regex = /!\[.*?\]\((.*?)\)/g;
    const urls = [];
    let match;
    while ((match = regex.exec(markdown)) !== null) {
      urls.push(match[1]);
    }
    return urls;
  };

  return { handleSave, extractImageUrls };
};

export default useWrite;
