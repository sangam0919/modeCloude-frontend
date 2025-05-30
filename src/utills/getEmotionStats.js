export const getEmotionStats = (diaries) => {
    const emotionCount = {};
  
    diaries.forEach((diary) => {
      const emotion = diary?.emotionLog?.userEmotion;
      if (!emotion) return;
  
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });
  
    return emotionCount;
  };
  