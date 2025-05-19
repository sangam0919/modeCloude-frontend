import React from 'react';
import styled from 'styled-components';
import DetailBtn from '../../molecules/detail/DetailBtn';
import EmotionTag from '../../molecules/detail/EmotionTag';
import { diaryDetail } from '../../../hooks/simpleData';
import CommentSection from './CommentSection';

// 전체 상단 박스
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
`
const Date = styled.div`
      display: flex;
      align-items: center;
      gap: 5px;
`
 const Public = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const DiaryMeta = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 25px;
`
const Title = styled.div`
    font-size: 1.8rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
`
const DairyText = styled.div`
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 30px;
`

const DairyTagAll = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
`

const DairyTag = styled.div`
      background: #f5f5f5;
    border-radius: 50px;
    padding: 5px 15px;
    font-size: 0.9rem;
    color: #666;
    transition: all 0.2s;
`

const DiaryStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
`

const Comment = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #777;
    font-size: 0.9rem;
`


const BoardDetail = () => {

  const { content,  emoji, emotion_label, date, is_public,title,tags } = diaryDetail;

  return (
    <Wrap>
        <EmotionTag />
        <Btn>
            <DetailBtn icon="✏️" title="수정"/>
            <DetailBtn icon="🗑️" title="삭제" />
        </Btn>
       <DiaryMeta>
            <Date>{date}</Date>
            <Public>🌎 공개</Public>
        </DiaryMeta>
        <Title>{title}</Title>
        <DairyText>{content}</DairyText>
        <DairyTagAll>
        {tags.map((tag, index) => (
             <DairyTag key={index}>{tag}</DairyTag>
      ))}
        </DairyTagAll>
      <DiaryStats>
        <Comment>💬 댓글 100</Comment>
      </DiaryStats>
    </Wrap>
  );
};

export default BoardDetail;
