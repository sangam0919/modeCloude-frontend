import React from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../../images/kakologin.png'; 
import { userLogin } from '../../../api/user';

const KakaoIcon = styled.div`
  background-image: url(${props => props.$icon});
  width: 24px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
  
  img {
    margin-left: 2.4vh;
  }
  /* background-image: url(${props => props.$icon});
  color: #3c1e1e;
  font-weight: bold;
  font-size: 0.95rem;
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
  } */
`;

const KakaoLogin = () => {
  const handleLogin = async () => {
    const {url} = await userLogin();
    window.location.href = url;
  };
  return (
    <KakaoIcon onClick={handleLogin}> 
      <img src={kakaoIcon} alt='카카오 로그인' />
    </KakaoIcon>
  );
};


export default KakaoLogin;
