// ✅ useMainInfo.js
import { useEffect, useState } from 'react';
import { fetchStreak, fetchWrittenWeekdays, fetchWrittenDates } from '../api/diary';

const useMainInfo = (uid) => {
  const [streak, setStreak] = useState(0);
  const [weekDone, setWeekDone] = useState([]);
  const [diaryDates, setDiaryDates] = useState([]);

  useEffect(() => {
    const now = new Date();
    const month = now.toISOString().slice(0, 7);
  
    const load = async () => {
      try {
        console.log("📦 useMainInfo: fetching for uid =", uid); 
        const [s, w, d] = await Promise.all([
          fetchStreak(uid),
          fetchWrittenWeekdays(uid),
          fetchWrittenDates(month, uid),
        ]);

        setStreak(s || 0);
        setWeekDone((w || []).map(n => '일월화수목금토'[n]));
        setDiaryDates(Array.from(new Set(d || [])));

      } catch (err) {
        console.error('useMainInfo: 데이터 로딩 실패', err);
      }
    };

    if (uid) load();
  }, [uid]);

  return { streak, weekDone, diaryDates };
};

export default useMainInfo;
