import React from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../images/kakologin.png'; 

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
  const handleLogin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code';
  };
  return (
    <KakaoIcon onClick={handleLogin}> 
      <img src={kakaoIcon} />
    </KakaoIcon>
  );
};

export default KakaoLogin;
