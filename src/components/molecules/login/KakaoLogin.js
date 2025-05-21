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
