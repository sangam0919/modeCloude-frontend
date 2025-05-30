import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyDiaries, fetchPublicDiaries } from '../../../redux/actions/diary';
import DiarySection from '../main/DiarySection';

const RecentDiariesSection = ({ isMyPage, targetUid }) => {
  const dispatch = useDispatch();
  const { myDiaries = [], publicDiaries = [], loading, error } = useSelector((state) => state.diary);

  useEffect(() => {
    if (isMyPage) {
      dispatch(fetchMyDiaries(targetUid));
    } else {
      dispatch(fetchPublicDiaries(targetUid));
    }
  }, [dispatch, targetUid, isMyPage]);

  const diariesToRender = isMyPage ? myDiaries : publicDiaries;

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <DiarySection
      title={isMyPage ? '내 일기' : '공개된 일기'}
      diaries={diariesToRender}
      viewMoreText="모든 일기 보기"
      viewMoreTo="/list"
    />
  );
};

export default RecentDiariesSection;
