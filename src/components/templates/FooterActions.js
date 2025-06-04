import React from 'react';
import styled from 'styled-components';
import { OutlineBtn } from '../atoms/RoundButton';
import { Link } from 'react-router-dom';

const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  color: #888;
  font-size: 0.9rem;
`;

const Quote = styled.p`
  font-style: italic;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`


const FooterActions = () => (
  <Footer>
    <Quote>"오늘 하루의 감정이 내일의 행복을 만듭니다."</Quote>
    <ButtonGroup>
      <StyledLink to={'/list'}>
        <OutlineBtn>일기 보기</OutlineBtn>
        </StyledLink>
      {/* <OutlineBtn><StyledLink></OutlineBtn> */}
      <StyledLink to={'/setting'}>
      <OutlineBtn>
        설정
      </OutlineBtn>
      </StyledLink>
    </ButtonGroup>
  </Footer>
);

export default FooterActions;
