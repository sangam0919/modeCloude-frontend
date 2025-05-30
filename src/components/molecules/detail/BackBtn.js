import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    background: none;
    border: none;
    color: #777;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.3s;

&:hover {
    color: #b881c2;
}
`

const BackBtn = ({onClick}) => {
  return (
    <>
      <Btn onClick={onClick}>← 뒤로가기</Btn>
    </>
  )
}

export default BackBtn
