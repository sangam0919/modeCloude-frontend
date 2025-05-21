import React from 'react';
import styled from 'styled-components';
import KakaoLogin from '../login/KakaoLogin';
import logo from '../../../images/logo2.png'

const ModalWrap = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  position: relative;

  .information {
    font-size : 12px;
    text-align: center;
    color: #333;
    margin-bottom: 15px;
   }
`;

const Logo = styled.img`
  width: 120px;
  margin: 0 auto 5px;
  display: block;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 5px;
  color: #b881c2;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px; right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const LoginModal = ({ onClose }) => {
  return (
    <ModalWrap onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Logo src={logo} alt="무드 구름 로고" />
        <Title>환영합니다</Title>
        <div className='information'>로그인을 하고 Mood Groom 이용하세요</div>
        <KakaoLogin />
      </ModalContent>
    </ModalWrap>
  );
};

export default LoginModal;
