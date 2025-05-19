import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import Profile from '../atoms/Profile'
import Card from '../atoms/Card'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'


const UserProflieLeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .text-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .text-wrap-diary{
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .diary-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const UserProfileLeft = () => {
  return (
    <Card>
      <UserProflieLeftWrap>
        <Profile></Profile>
        <div className='text-wrap'>
          <Text size={"1.8rem"} weight={"bold"}>ming</Text>
          <Text color={"#777"}>안녕하세요! 저는 매일 감정을 기록하며 더 나은 하루를 만들어가고 있어요.</Text>
          <div className='text-wrap-diary'>
            <div className='diary-content'>
              <Text color={"#b881c2"} weight={"bold"}>2</Text>
              <Text color={"#777"}>일기</Text>
            </div>
            <div className='diary-content'>
              <Text color={"#b881c2"} weight={"bold"}>8</Text>
              <Text color={"#777"}>좋아요</Text>
            </div>
          </div>
        </div>
      </UserProflieLeftWrap>
      <Link to={"/edit"}>
        <Button color={"#b881c2"} radius={"30px"} >프로필 편집</Button>
      </Link>
    </Card>
  )
}

export default UserProfileLeft