
import React from 'react';
import GreetingBox from '../../molecules/main/GreetingBox';
import useUser from '../../../hooks/useUser'
const MainGreetingSection = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${['일', '월', '화', '수', '목', '금', '토'][today.getDay()]}요일`;
  const { user } = useUser();
  

  return<GreetingBox
  dateString={formattedDate}
  userName={user && user.nickname ? user.nickname : '게스트'}
/>
};

export default MainGreetingSection;
