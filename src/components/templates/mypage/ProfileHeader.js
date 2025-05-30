import React from 'react';
import UserProfileLeft from '../../molecules/mypage/UserProfileLeft';

const ProfileHeader = ({ uid, isMyPage, isFollowing, onFollowChange }) => {
  return <UserProfileLeft uid={uid} isMyPage={isMyPage} isFollowing={isFollowing} 
  onFollowChange={onFollowChange}  />;
};

export default ProfileHeader;
