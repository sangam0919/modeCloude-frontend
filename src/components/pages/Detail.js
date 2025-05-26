import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../templates/Header';
import LayoutTwoCols from '../templates/LayoutTwoCols';
import Sidbar from '../templates/detail/Sidbar';
import DiaryNav from '../templates/detail/DiaryNav';
import BoardDetail from '../templates/detail/BoardDetail';
import CommentSection from '../templates/detail/CommentSection';
import { fetchDiaryDetail } from '../../redux/actions/diary';
import useUser from '../../hooks/useUser';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Detail = () => {
  const { id } = useParams();                       
  const dispatch = useDispatch();
  const diary = useSelector((state) => state.diary.detail);  
  const user =useUser();
  useEffect(() => {
    dispatch(fetchDiaryDetail(id));                  
  }, [dispatch, id]);

  useEffect(() => {
    console.log('diary:', diary);
    console.log('diary.comments:', diary?.comments);
  }, [diary]);

  if (!diary) return <div>로딩 중...</div>;

  const leftColumn = (
    <>
      <BoardDetail diary={diary} />
      <CommentSection 
      comments={diary.comments || []}
      diaryId={diary.id} 
      user={user}
      />
    </>
  );

  return (
    <Container>
      <Header />
      <DiaryNav />
      <LayoutTwoCols left={leftColumn} right={<Sidbar
      diary= {diary} />} />
    </Container>
  );
};

export default Detail;
