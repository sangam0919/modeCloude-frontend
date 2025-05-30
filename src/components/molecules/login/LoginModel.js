import React from 'react';
import styled from 'styled-components';
import KakaoLogin from '../login/KakaoLogin';
import logo from '../../../images/logo2.png'

const ModalWrap = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  /* background: rgba(0, 0, 0, 0.4); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 400px;
  position: relative;
  color: #fff;
  text-align: center;
  animation: fadeIn 0.4s ease;

  .information {
    font-size: 0.95rem;
    font-family: 'Gmarket Sans', 'Noto Sans KR', sans-serif;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
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
top: 10px;
right: 20px;
font-family: 'Pretendard', sans-serif;
font-size: 1.2rem;
color: #999;
background: none;
border: none;
cursor: pointer;
transition: transform 0.2s ease;

&:hover {
  transform: scale(1.2);
  color: #333;
}
`;



// const CloseButton = styled.button`
//   position: absolute;
//   top: 5px; right: 10px;
//   background: none;
//   border: none;
//   font-size: 1.2rem;
//   cursor: pointer;
// `;

const LoginModal = ({ onClose }) => {
  return (
    <ModalWrap onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Logo src={logo} alt="무드 구름 로고" />
        <Title>환영합니다</Title>
        <div className='information'>지금 로그인하고, 감정을 구름에 띄워보세요 ☁️</div>
        <KakaoLogin />
      </ModalContent>
    </ModalWrap>
  );
};

export default LoginModal;
