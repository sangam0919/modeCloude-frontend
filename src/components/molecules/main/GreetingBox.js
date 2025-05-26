import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
`;

const DateText = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
`;

const GreetingText = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

const MoodQuestion = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const GreetingBox = ({ dateString, userName }) => (
  <HeaderWrap>
    <DateText>{dateString}</DateText>
    <GreetingText>안녕하세요, {userName}님</GreetingText>
    <MoodQuestion>오늘의 기분은 어떠신가요?</MoodQuestion>
  </HeaderWrap>
);

export default GreetingBox;
