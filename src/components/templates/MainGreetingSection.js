// src/components/templates/MainGreetingSection.jsx

import React from 'react';
import GreetingBox from '../molecules/GreetingBox';

const MainGreetingSection = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${['일', '월', '화', '수', '목', '금', '토'][today.getDay()]}요일`;

  const userName = '지은'; // 추후 DB 연결 또는 상태로 대체 가능

  return <GreetingBox dateString={formattedDate} userName={userName} />;
};

export default MainGreetingSection;
