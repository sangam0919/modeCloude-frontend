import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../templates/Header';
import ProfileHeader from '../templates/mypage/ProfileHeader';
import styled from 'styled-components';
import LayoutTwoCols from '../templates/LayoutTwoCols';
import Sidebar from '../templates/mypage/Sidbar';
import RecentDiariesSection from '../templates/mypage/RecentDiariesSection';
import useUser from '../../hooks/useUser';
import { decodeHashToUid } from '../../utills/useUtills';
import { checkFollowStatus } from '../../api/follow';

const MypageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 5px;
`;

const BlurWrapper = styled.div`
  filter: ${({ isBlur }) => (isBlur ? 'blur(4px)' : 'none')};
  pointer-events: ${({ isBlur }) => (isBlur ? 'none' : 'auto')};
  transition: filter 0.3s;
`;

const Mypage = () => {
  const { hash } = useParams();
  const { user } = useUser();
  const [isMyPage, setIsMyPage] = useState(true);
  const [targetUid, setTargetUid] = useState(null);
  const [isFollowed, setIsFollowed] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (!user) return;

      if (!hash) {
        setIsMyPage(true);
        setTargetUid(user.uid);
        return;
      }

      const decodedUid = decodeHashToUid(hash);
      setTargetUid(decodedUid);

      if (decodedUid === user.uid) {
        setIsMyPage(true);
        return;
      }

      setIsMyPage(false);

      try {
        const followed = await checkFollowStatus(user.uid, decodedUid);
        setIsFollowed(followed);
      } catch (err) {
        console.error('팔로우 상태 확인 실패:', err);
        setIsFollowed(false);
      }
    };

    init();
  }, [hash, user]);

  if (!targetUid) return null;

  const isBlur = !isMyPage && !isFollowed;

  return (
    <MypageWrap>
      <Header />
      <ProfileHeader
        uid={targetUid}
        isMyPage={isMyPage}
        onFollowChange={(newState) => {
        setIsFollowed(newState); 
  }}
/>

      <BlurWrapper isBlur={isBlur}>
        <LayoutTwoCols
          left={
            <RecentDiariesSection
              isMyPage={isMyPage}
              targetUid={targetUid}
            />
          }
          right={<Sidebar key={targetUid} uid={targetUid} />}
        />
      </BlurWrapper>
    </MypageWrap>
  );
};

export default Mypage;
