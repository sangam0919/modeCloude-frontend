import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmotionGrid from '../../molecules/main/EmotionGrid';
import SelectedEmotionInfo from '../../molecules/main/SelectedEmotionInfo';
import EmotionActions from '../../molecules/main/EmotionActions';
import useEmotion from '../../../hooks/useEmotion';
import { useNavigate } from 'react-router-dom';
const Section = styled.section`
    background: white;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Divider = styled.hr`
  margin: 25px 0;
  border: none;
  border-top: 1px dashed #e0e0e0;
`;

export default function EmotionDiarySection() {
  const navigate = useNavigate();
  const {emotions, selected, setSelected} = useEmotion();
  const selObj = emotions.find((e) => e.id === selected);

  const handleWrite = () => {
    if (!selObj) return;
    const query = new URLSearchParams({
      mood: selObj.id,
      emoji: selObj.emoji,
      label: selObj.name,
    }).toString();
    
    console.log('최종 URL:', `/write?${query}`);
    navigate(`/write?${query}`);
  };
  const handleRecord = () => console.log('감정만 기록하기 클릭');

  return (
    <Section>
    <h3 className="section-title">오늘의 감정을 선택하고 이야기를 들려주세요</h3>

    <EmotionGrid items={emotions} selected={selected} onSelect={setSelected} />

    {selObj && (
      <>
        <Divider />
        <SelectedEmotionInfo
          mood={selObj.id}
          emoji={selObj.emoji}
          text={`오늘은 ${selObj.name}하신가요?`}
        />
        <EmotionActions onWrite={handleWrite} onRecord={handleRecord} />
      </>
    )}
  </Section>
  );
}
{/* 
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['오늘의 일상', '나의 감정 탐색', '감사한 일 3가지', '목표와 계획'].map((tag) => (
              <TemplateTag key={tag}>{tag}</TemplateTag>
            ))}
          </div> */}