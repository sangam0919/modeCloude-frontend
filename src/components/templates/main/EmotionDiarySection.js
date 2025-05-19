import { useState } from 'react';
import styled from 'styled-components';
import EmotionGrid from '../../molecules/EmotionGrid';
import SelectedEmotionInfo from '../../molecules/SelectedEmotionInfo';
import EmotionActions from '../../molecules/EmotionActions';
import { moods } from '../../../hooks/simpleData'
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


  const [selected, setSelected] = useState(null);
  const selObj = moods.find((m) => m.mood === selected);

  const handleWrite  = () => console.log('일기 작성하기 클릭');
  const handleRecord = () => console.log('감정만 기록하기 클릭');

  return (
    <Section>
      <h3 className="section-title">오늘의 감정을 선택하고 이야기를 들려주세요</h3>

      <EmotionGrid items={moods} selected={selected} onSelect={setSelected} />

      {selected && (
        <>
          <Divider />
          <SelectedEmotionInfo
            mood={selObj.mood}
            emoji={selObj.emoji}
            text={`오늘은 ${selObj.label}하신가요?`}
          />

          <EmotionActions onWrite={handleWrite} onRecord={handleRecord} />
{/* 
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['오늘의 일상', '나의 감정 탐색', '감사한 일 3가지', '목표와 계획'].map((tag) => (
              <TemplateTag key={tag}>{tag}</TemplateTag>
            ))}
          </div> */}
        </>
      )}
    </Section>
  );
}