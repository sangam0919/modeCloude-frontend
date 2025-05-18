import React from 'react';
import styled from 'styled-components';

import EmotionDiarySection from '../templates/EmotionDiarySection';
import RecentDiariesSection from '../templates/RecentDiariesSection';
import OtherDiariesSection from '../templates/OtherDiariesSection';
import Sidebar from '../templates/Sidbar';
import LayoutTwoCols from '../templates/LayoutTwoCols';
import Header from '../templates/Header';
import MainGreetingSection from '../templates/MainGreetingSection';
import FooterActions from '../templates/FooterActions';
import Container from '../atoms/Container';

const Main = () => {
  const leftColumn = (
    <>
      <EmotionDiarySection />
      <RecentDiariesSection />
      <OtherDiariesSection />
    </>
  );

  return (
    <Container>
      <Header />
      <MainGreetingSection />
      <LayoutTwoCols left={leftColumn} right={<Sidebar />} />
      <FooterActions />
    </Container>
  );
};

export default Main;
