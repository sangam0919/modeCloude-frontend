import React, { useEffect } from 'react';
import styled from 'styled-components';
import DetailBtn from '../../molecules/detail/DetailBtn';
import EmotionTag from '../../molecules/detail/EmotionTag';
import CommentSection from './CommentSection';
import { parseMarkdownWithFallback } from '../../../utills/parseMarkdown.js';
import useEmotion from '../../../hooks/useEmotion';
import { useNavigate } from 'react-router-dom';

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
  font-size: 1.8rem;
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

const BoardDetail = ({ diary }) => {
  const { emotions } = useEmotion();
  const navigate = useNavigate();

  useEffect(() => {
    if (diary) {
      console.log('상세 페이지 diary 데이터:', diary);
      console.log('전체 감정 리스트:', emotions);
      console.log('userEmotion:', diary?.emotionLog?.userEmotion);
      console.log('aiEmotion:', diary?.emotionLog?.selectEmotion);
    }
  }, [diary, emotions]);

  const handleEdit = () => {
    navigate(`/edit/${diary.id}`, {
      state: { diary },  // diary 객체를 같이 보냄
    });
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
  const aiEmotion = emotions.find((e) => e.id === emotionLog.selectEmotion);

  return (
    <Wrap>
      {/* 내가 선택한 감정 */}
      {userEmotion && (
        <EmotionTag emoji={userEmotion.emoji} label={`내 선택: ${userEmotion.name}`} color={userEmotion.color} />
      )}

      {/* AI 감정 */}
      {aiEmotion && (
      <EmotionTag
        label={`AI 감정: ${aiEmotion.name}`}
        emoji={aiEmotion.emoji}
        color={aiEmotion.color}
      />
    )}
      <Btn>
        <DetailBtn icon="✏️" title="수정" onClick={handleEdit} />
        <DetailBtn icon="🗑️" title="삭제" />
      </Btn>

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
