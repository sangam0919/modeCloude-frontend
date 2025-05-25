import { useEffect, useState } from 'react';
import { fetchStreak, fetchWrittenWeekdays, fetchWrittenDates } from '../api/diary';

const useMainInfo = () => {
  const [streak, setStreak] = useState(0);
  const [weekDone, setWeekDone] = useState([]);
  const [diaryDates, setDiaryDates] = useState([]);

  useEffect(() => {
    const now = new Date();
    const month = now.toISOString().slice(0, 7); // 'YYYY-MM'

    const load = async () => {
      try {
        const [s, w, d] = await Promise.all([
          fetchStreak(),              // 🔥 2일 연속 받아야 함
          fetchWrittenWeekdays(),    // 🔥 [4,5] 기대
          fetchWrittenDates(month),  // 🔥 ['2025-05-23', '2025-05-24']
        ]);

        setStreak(s || 0);
        setWeekDone((w || []).map(n => '일월화수목금토'[n]));
        setDiaryDates(Array.from(new Set(d || []))); // 전체 날짜 유지

        console.log('🔥 streak:', s);
        console.log('🔥 weekdays:', w);
        console.log('🔥 dates:', d);
      } catch (err) {
        console.error('🔥 useMainInfo: 데이터 로딩 실패', err);
      }
    };

    load();
  }, []);

  return { streak, weekDone, diaryDates };
};

export default useMainInfo;
