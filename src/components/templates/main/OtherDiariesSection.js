import DiarySection from './DiarySection';
import EmotionIcon from '../../atoms/EmotionIcon';
import { others } from '../../../hooks/simpleData'
import { useDispatch, useSelector} from "react-redux"
import { subDays, subMonths, subYears, isAfter } from 'date-fns';
import { useEffect, useState } from 'react';
import { fetchFollowerDiary } from '../../../redux/actions/diary'; 

export default function OthersDiariesSection(){

  const handleMore = () => console.log('남의 일기 더 보기 클릭');
  const renderEmotion = (emoji) => <EmotionIcon otehrs={emoji} />;
  const { followerDiaries = [], loading, error } = useSelector((state) => state.diary);
  console.log("dkdkdkdkdkdkdkd", followerDiaries)
  const [filter, setFilter] = useState('all');
  const now = new Date();
  const dispatch = useDispatch();
  const extractDate = (dateStr) => {
    return new Date(dateStr.slice(0, 10)); // "2025-05-01" 형식
  };

    
  useEffect(() => {
    dispatch(fetchFollowerDiary());
  }, [dispatch]);

      const filteredDiaries = Array.isArray(followerDiaries)
      ? followerDiaries.filter((diary) => {
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
    <DiarySection
      title="남의 일기"
      diaries={filteredDiaries}
      // renderEmotion={renderEmotion}
      viewMoreText="남의 일기 더 보기"
      viewMoreTo="/others"  
      onViewMore={handleMore}
  />
  );
}