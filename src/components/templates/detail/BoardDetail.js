import React, { useEffect } from 'react';
import styled from 'styled-components';
import DetailBtn from '../../molecules/detail/DetailBtn';
import EmotionTag from '../../molecules/detail/EmotionTag';
import CommentSection from './CommentSection';
import { parseMarkdownWithFallback } from '../../../utills/parseMarkdown.js';
import useEmotion from '../../../hooks/useEmotion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDiaryActions } from '../../../redux/actions/diary';

const Wrap = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  position: relative;
`;

const Btn = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 15px;
`;

const StyledDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Public = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DiaryMeta = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
`;

const DairyText = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 30px;

  img {
    margin-top: 10px;
    max-width: 100%;
    border-radius: 10px;
  }
`;

const EmotionRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const DairyTagAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

const DairyTag = styled.div`
  background: #f5f5f5;
  border-radius: 50px;
  padding: 5px 15px;
  font-size: 0.9rem;
  color: #666;
  transition: all 0.2s;
`;

const DiaryStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #777;
  font-size: 0.9rem;
`;

const BoardDetail = ({ diary, user }) => {
  const { emotions } = useEmotion();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { deleteStatus, deleteError } = useSelector((state) => state.diary);

  useEffect(() => {
    if (diary) {
      console.log('상세 페이지 diary 데이터:', diary);
      console.log('전체 감정 리스트:', emotions);
      console.log('userEmotion:', diary?.emotionLog?.userEmotion);
      console.log('aiEmotion:', diary?.emotionLog?.selectEmotion);
    }
  }, [diary, emotions]);

  useEffect(() => {
    if (deleteStatus === 'success') {
      alert('삭제가 완료되었습니다.');
      navigate('/main');
    }
    if (deleteStatus === 'fail') {
      alert(`삭제에 실패했습니다: ${deleteError}`);
    }
  }, [deleteStatus]);

  const handleEdit = () => {
    navigate(`/edit/${diary.id}`, {
      state: { diary },  
    });
  };

  const handleDelete = async () => {
  const confirmDelete = window.confirm('정말 이 일기를 삭제하시겠습니까?');
  if (!confirmDelete) return;

  await dispatch(deleteDiaryActions(diary.id));

  navigate('/main');
};

  if (!diary) return <div>로딩 중...</div>;

  const {
    content,
    createdAt,
    is_public,
    title,
    tags = [],
    images = [],
    emotionLog = {},
  } = diary;

  
  const userEmotion = emotions.find((e) => e.id === emotionLog.userEmotion);
  const aiEmotion = emotions.find((e) => String(e.id) === String(emotionLog.selectEmotion));

  return (
    <Wrap>
      <EmotionRow >
      {/* 내가 선택한 감정 */}
      {userEmotion && (
        <EmotionTag emoji={userEmotion.emoji} label={`${userEmotion.name}`} color={userEmotion.color} />
      )}

      {/* AI 감정 */}
      {aiEmotion && (
        <EmotionTag
        label={`${aiEmotion.name}`}
        emoji={aiEmotion.emoji}
        color={aiEmotion.color}
        />
      )}
      </EmotionRow>
      {String(user?.uid) === String(diary.user_id) && (
      <Btn>
        <DetailBtn icon="✏️" title="수정" onClick={handleEdit} />
        <DetailBtn icon="🗑️" title="삭제" onClick={handleDelete} />
      </Btn>
    )}
      <DiaryMeta>
        <StyledDate>{new Date(createdAt).toLocaleDateString()}</StyledDate>
        <Public>{is_public ? '🌎 공개' : '🔒 비공개'}</Public>
      </DiaryMeta>

      <Title>{title}</Title>

      <DairyText
        dangerouslySetInnerHTML={{
          __html: parseMarkdownWithFallback(content, images.map(img => img.image_url)),
        }}
      />

      <DairyTagAll>
        {tags.map((tag, index) => (
          <DairyTag key={index}>{tag}</DairyTag>
        ))}
      </DairyTagAll>

      <DiaryStats>
        <Comment>💬  {diary.comments.length}</Comment>
      </DiaryStats>
    </Wrap>
  );
};

export default BoardDetail;
