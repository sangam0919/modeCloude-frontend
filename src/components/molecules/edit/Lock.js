import React, { useState } from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px;
    background: white;
    border-radius: 15px;
    padding: 20px;
`

const BtnAll = styled.div`
      display: flex;
      gap: 10px;
`

const LockButton = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ active }) => (active ? 'white' : 'rgb(102, 102, 102)')};
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  background: ${({ active }) => (active ? 'rgb(184, 129, 194)' : 'rgb(245, 245, 245)')};
  transition: 0.2s;
`;

const Title = styled.h3`
    font-size: 1.1rem;
    color: rgb(68, 68, 68);
    font-weight: 600;
    margin-bottom: 15px;
`
const SettingLabal = styled.div`
    font-size: 0.9rem;
    color: rgb(102, 102, 102);
    margin-bottom: 8px;
    display: block;
`


const Lock = ({ isPublic, setIsPublic }) => {
  return (
    <Wrap>
      <Title>일기 설정</Title>
      <SettingLabal>공개 설정</SettingLabal>
      <BtnAll>
        <LockButton
          active={isPublic === true}
          onClick={() => {
             console.log('전체 공개 클릭됨');
            setIsPublic(true)
          }}>
          전체 공개
        </LockButton>
        <LockButton
          active={isPublic === false}
          onClick={() => setIsPublic(false)}
        >
          나만 보기
        </LockButton>
      </BtnAll>
    </Wrap>
  );
};

export default Lock;