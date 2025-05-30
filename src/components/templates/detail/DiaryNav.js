import React from 'react'
import BackBtn from '../../molecules/detail/BackBtn'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
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
    margin-left: 5px;
`


const DiaryNav = () => {
  const diary = useSelector((state) => state.diary.detail);
  const title = diary?.title ?? ''; 
  const navigate = useNavigate();

  const handlerBack = () => {
    navigate('/main')
  }

  return (
    <Wrap>
      <BackBtn onClick={handlerBack}/>
      <StyledLink to={'/list'}>내 일기 /</StyledLink>
      {title && <Title>{title}</Title>}
    </Wrap>
  );
}

export default DiaryNav
