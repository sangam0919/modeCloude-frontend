import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  font-size: 1.8rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 20px;
`

const DateText = styled.div`
    font-size: 1rem;
    color: rgb(119, 119, 119);
    margin-left: 15px;
`

const formatDate = (date) => {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}`;
};

const WriteTitle = () => {
  const today = new Date();

  return (
    <Wrap>
      <div>일기 작성</div>
      <DateText>{formatDate(today)}</DateText>
    </Wrap>
  )
}

export default WriteTitle;
