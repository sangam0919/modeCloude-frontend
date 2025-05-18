import React from 'react';
import styled from 'styled-components';
import Button from '../molecules/LoginButton';
import logo from "../../images/logo2.png"
import useModal from '../../hooks/useModal';
import LoginModal from '../molecules/LoginModel'; 
import CloudBackground from '../atoms/CloudBackground';


const Container = styled.div`
  text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 10;
`;

const Logo = styled.img`
       position: relative;
      width: 220px;
      height: 220px;
      display: flex ;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
      transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      &.disabled {
        opacity :0;
        transform : scale(0.4) translateY(-150px)
      }
`

const Title = styled.h1`
  font-size: 2.8rem;
    font-weight: 700;
    color: #b881c2;
    margin-bottom: 10px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: opacity 0.5s ease, transform 0.5s ease;
    &.disabled {
        opacity :0;
        transform : translateY(-150px)
      }
`;

const Desc = styled.p`
font-size: 1.4rem;
    color: #7a7a7a;
    margin-bottom: 30px;
    transition: opacity 0.5s ease, transform 0.5s ease;
    &.disabled {
        opacity :0;
        transform : translateY(-150px)
      }
`;




const LandingPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
    <CloudBackground /> {/* ✅ 구름 배경은 가장 위에 */}
    <Container>
    <Logo  className={isOpen ? "disabled" : ""} src={logo} onClick={openModal} alt="무드 구름 로고" />
    <Title className={isOpen ? "disabled" : ""}>Mood Cloud</Title>
    <Desc className={isOpen ? "disabled" : ""}>당신의 감정을 담는 구름</Desc>
    <Button className={isOpen ? "disabled" : ""} onClick={openModal}>시작하기</Button>
    </Container>
    
    {isOpen && <LoginModal onClose={closeModal} />}
    </>
  );
};

export default LandingPage;
