import React from 'react'
import styled from 'styled-components'
import WriteTitle from '../../molecules/write/WriteTitle'
import { GradientBtn, OutlineBtn } from '../../atoms/RoundButton'  // ✅ 이렇게 중괄호로!

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const WriteHeader = () => {
  return (
    <Wrap>
      <WriteTitle />
      <ButtonGroup>
        <OutlineBtn>취소</OutlineBtn>
        <GradientBtn>저장하기</GradientBtn>
      </ButtonGroup>
    </Wrap>
  )
}

export default WriteHeader
