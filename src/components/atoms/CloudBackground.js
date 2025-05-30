import React from 'react';
import styled, { keyframes } from 'styled-components';


const float = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(40px) translateY(-10px);
  }
  50% {
    transform: translateX(20px) translateY(10px);
  }
  75% {
    transform: translateX(-20px) translateY(-5px);
  }
`;

const Cloud = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 100px;
  opacity: 0.7;
  filter: blur(2px);
  animation: ${float} 20s infinite ease-in-out;
  z-index: -1;
  &:before, 
  &:after {
    content: '';
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }
  &:before {
    width: 60px;
    height: 60px;
    top: -30px;
    left: 10px;
  }

  &:after {
    width: 80px;
    height: 80px;
    top: -40px;
    left: 40px;
  }
`;

const Cloud1 = styled(Cloud)`
  top: 10%;
  left: 20%;
  width: 170px;
  height: 60px;
`;

const Cloud2 = styled(Cloud)`
  top: 30%;
  left: 50%;
  width: 150px;
  height: 70px;
`;

const Cloud3 = styled(Cloud)`
  top: 60%;
  left: 10%;
  width: 130px;
  height: 50px;
`;

const Cloud4 = styled(Cloud)`
  top: 80%;
  left: 70%;
  width: 140px;
  height: 55px;
`;

const Cloud5 = styled(Cloud)`
  top: 20%;
  left: 80%;
  width: 160px;
  height: 80px;
`;

const CloudBackground = () => {
  return (
    <>
        <Cloud1 />
        <Cloud2 />
        <Cloud3 />
        <Cloud4 />
        <Cloud5 />
    </>
  );
};

export default CloudBackground;
