import React, { useState } from 'react';
import LandingPage from '../templates/LoadingPage';
import LoginModal from '../molecules/LoginModel';
import styled from 'styled-components';

const Wrap = styled.div`
    
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
