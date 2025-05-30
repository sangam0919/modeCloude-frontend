// hooks/useDiaryStatus.js
import { useState, useEffect, useCallback } from 'react';
import { checkTodayWritten } from '../api/diary';

const useDiaryStatus = () => {
  const [isDone, setIsDone] = useState(false);

  const fetchStatus = useCallback(async () => {
    try {
      const data = await checkTodayWritten({});
      setIsDone(data.hasWritten);
    } catch (err) {
      console.error('오늘 작성 여부 확인 실패:', err);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return { isDone, refetchStatus: fetchStatus };
};

export default useDiaryStatus;
