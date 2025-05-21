import React, { useEffect, useState } from 'react';
import LandingPage from '../templates/login/LoadingPage';
import LoginModal from '../molecules/login/LoginModel';
import styled from 'styled-components';
import { userLogin } from '../../api/user';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const Login = () => {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Wrap>
      <LandingPage onStart={() => setModalOpen(true)} />
      {modalOpen && <LoginModal />}
    </Wrap>
    </>
  );
};

export default Login;
