import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMyDiaries } from '../../../redux/actions/diary'; 
import { subDays, subMonths, subYears, isAfter } from 'date-fns';
import DiarySection from '../main/DiarySection';

const RecentDiariesSection = () => {
  const dispatch = useDispatch();
  const { myDiaries = [], loading, error } = useSelector((state) => state.diary);
  console.log('myDiaries:', myDiaries);
  const [filter, setFilter] = useState('all');
  const now = new Date();

  useEffect(() => {
    dispatch(fetchMyDiaries());
  }, [dispatch]);

  const extractDate = (dateStr) => {
    return new Date(dateStr.slice(0, 10)); 
  };

  const filteredDiaries = Array.isArray(myDiaries)
    ? myDiaries.filter((diary) => {
        const diaryDate = extractDate(diary.createdAt);
        if (filter === 'week') return isAfter(diaryDate, subDays(now, 7));
        if (filter === 'month') return isAfter(diaryDate, subMonths(now, 1));
        if (filter === 'year') return isAfter(diaryDate, subYears(now, 1));
        return true;
      })
    : [];

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div>
      <DiarySection
        title="최근 일기"
        diaries={filteredDiaries}
        viewMoreText="모든 일기 보기"
        viewMoreTo="/list"
      />
    </div>
  );
};

export default RecentDiariesSection;
