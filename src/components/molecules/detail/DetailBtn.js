import React from 'react'
import styled from 'styled-components'


const DeatilBtnAll = styled.button`
  width: ${({ size }) => size || '36px'};
  height: ${({ size }) => size || '36px'};
  border-radius: 50%;
  background-color: ${({ bg }) => bg || '#f5f5f5'};
  color: ${({ color }) => color || '#444'};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;


  &:hover {
    background-color: ${({ hover }) => hover || '#e0e0e0'};
  }
`;

const DetailBtn = ({icon, onClick, title, bg, color, hover, size}) => {
  return (
    <DeatilBtnAll onClick={onClick} title={title} bg={bg} color={color} hover={hover} size={size}>
      {icon}
    </DeatilBtnAll>
  )
}

export default DetailBtn
