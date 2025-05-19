import React from 'react'
import BackBtn from '../../molecules/detail/BackBtn'
import { Link } from 'react-router-dom'
import { sample } from '../../../hooks/simpleData'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const StyledLink = styled(Link)`
    color: #777;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
    margin-left: 15px;

  &:hover {
    color: #b881c2;
  }
`;

const Title = styled.span`
    color: rgb(85, 85, 85);
    font-size: 0.9rem;
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`




const DiaryNav = () => {
    const title = sample[1].title;

  return (
    <Wrap>
        <BackBtn />
        <StyledLink to='#'>  내 일기</StyledLink>
        <Title>/  {title}</Title>
    </Wrap>
  )
}

export default DiaryNav
