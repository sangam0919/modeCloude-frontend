import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { followUser, unfollowUser,checkFollowStatus } from '../../../api/follow';
import FeedbackModal from '../../atoms/FeedbackModal';

const base = css`
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
`;

const StyledFollow = styled.button`
  ${base};
  color: #fff;
  border: none;
  background: linear-gradient(135deg, #b881c2 0%, #a06fb1 100%);
  box-shadow: 0 4px 10px rgba(184, 129, 194, 0.3);

  &:hover {
    background: linear-gradient(135deg, #a06fb1 0%, #8e5ba0 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(184, 129, 194, 0.4);
  }
`;

const StyledUnfollow = styled.button`
  ${base};
  background: #fff;
  color: #666;
  border: 1px solid #ddd;

  &:hover {
    background: #f9f9f9;
    border-color: #b881c2;
    color: #b881c2;
  }
`;

export default function FollowButton({ myId, targetId, onFollowChange }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const followed = await checkFollowStatus(myId, targetId);
        setIsFollowing(followed);
      } catch (err) {
        console.error('팔로우 상태 확인 실패:', err);
      } finally {
        setLoading(false);
      }
    };
  
    if (myId !== targetId) {
      fetchStatus();
    } else {
      setLoading(false);
    }
  }, [myId, targetId]);
  

  

  const handleClick = async () => {
    try {
      if (isFollowing) {
        await unfollowUser(myId, targetId);
        setIsFollowing(false);
        onFollowChange?.(false);
      } else {
        await followUser(myId, targetId);
        setIsFollowing(true);
        onFollowChange?.(true);
      }
  
      setModalMessage(isFollowing ? '팔로우를 끊었습니다.' : '팔로우가 완료되었습니다.');
      setShowModal(true);
    } catch (err) {
      console.error('팔로우/언팔로우 실패:', err);
    }
  };

  if (loading || myId === targetId) return null;

  return (
    <>
      {isFollowing ? (
        <StyledUnfollow onClick={handleClick}>언팔로우</StyledUnfollow>
      ) : (
        <StyledFollow onClick={handleClick}>팔로우</StyledFollow>
      )}

      {showModal && (
        <FeedbackModal
          type="success"
          customMessage={modalMessage}
          showButton={true}
          buttonText="확인"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
