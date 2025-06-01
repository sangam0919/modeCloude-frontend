import { useEffect, useState } from 'react';
import { getUserStats } from '../api/user';

const useUserStats = () => {
  const [stats, setStats] = useState({
    diaryCount: 0,
    followerCount: 0,
    followingCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserStats();
      setStats(data);
    };
    fetchData();
  }, []);

  return stats;
};

export default useUserStats;
