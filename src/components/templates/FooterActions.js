// src/components/templates/FooterActions.jsx

import React from 'react';
import styled from 'styled-components';
import { OutlineBtn } from '../atoms/RoundButton'; // ✅ 실제 경로에 맞게 수정

// ✅ styled-components 정의
const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  color: #888;
  font-size: 0.9rem;
`;

const Quote = styled.p`
  font-style: italic;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
`;

// ✅ 최종 컴포넌트
const FooterActions = () => (
  <Footer>
    <Quote>"오늘 하루의 감정이 내일의 행복을 만듭니다."</Quote>
    <ButtonGroup>
      <OutlineBtn>일기 쓰기</OutlineBtn>
      <OutlineBtn>친구 찾기</OutlineBtn>
      <OutlineBtn>설정</OutlineBtn>
    </ButtonGroup>
  </Footer>
);

export default FooterActions;
