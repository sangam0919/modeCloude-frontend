import React, { useState } from 'react';
import styled from 'styled-components';
import EmotionIcon from '../../atoms/EmotionIcon';
import { OutlineBtn } from '../../atoms/RoundButton';
import LabelText from '../../atoms/LabelText';

const Widget = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  background: #f8fbff;
  max-width: 280px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 10px 0;
`;

const EmotionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const EmotionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const EmotionAiIcon = styled.div`
  width: 100px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  border-radius: 50%;
  margin: 0px auto 15px;
`;

const Btn = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

const MyCheck = styled.div`
  border-top: 1px solid #f0f0f0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const MiddleBox = styled.div`
   margin-top: 20px;
`

const EmotionAi = () => {

  const [aiEmotion] = useState({
    emoji: '😌',
    mood: 'calm',
    name: '평온',
  })

  const [selected, setSelected] = useState(null);

  const [showOptions, setShowOptions] = useState(false);

  const options = [
    { mood: 'happy',   emoji: '😊', name: '행복' },
    { mood: 'sad',     emoji: '😢', name: '슬픔' },
    { mood: 'angry',   emoji: '😠', name: '분노' },
    { mood: 'calm',    emoji: '😌', name: '평온' },
    { mood: 'anxious', emoji: '😰', name: '불안' },
    { mood: 'tired',   emoji: '😴', name: '피곤' },
    { mood: 'excited', emoji: '🤩', name: '신남' },
    { mood: 'confused',emoji: '🤔', name: '혼란' },
  ];

  return (
    <Widget>
      <Title>감정 분석</Title>
      <Description>AI가 분석한 감정은:</Description>

      <EmotionAiIcon>
        <EmotionIcon emoji={aiEmotion.emoji} mood={aiEmotion.mood} diameter={80} fontSize={36} />
        <LabelText style={{ marginTop: '10px' }}>{aiEmotion.name}</LabelText>
      </EmotionAiIcon>

      <Btn>
        <OutlineBtn>좋아요</OutlineBtn>
        <OutlineBtn onClick={() => setShowOptions(true)}>싫어요</OutlineBtn>
      </Btn>

      {showOptions && (
        <EmotionList>
          {options.map((opt) => (
            <EmotionItem key={opt.name} onClick={() => setSelected(opt)}>
              <EmotionIcon emoji={opt.emoji} mood={opt.mood} diameter={50} fontSize={22} />
              <LabelText>{opt.name}</LabelText>
            </EmotionItem>
          ))}
        </EmotionList>
      )}
      {selected && (
        <MyCheck>
          <MiddleBox>
          <EmotionAiIcon>
            <EmotionIcon emoji={selected.emoji} mood={selected.mood} diameter={80} fontSize={36} />
            <LabelText style={{ marginTop: '10px' }}>{selected.name}</LabelText>
          </EmotionAiIcon>
          <Description>내가 선택한 감정</Description>
          </MiddleBox>
        </MyCheck>
      )}
    </Widget>
  );
};

export default EmotionAi;
