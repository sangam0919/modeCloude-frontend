import React from 'react';
import UserProfileLeft from '../../molecules/Mypage/UserProfileLeft';

const ProfileHeader = ({ uid, isMyPage, isFollowing, onFollowChange }) => {
  return <UserProfileLeft uid={uid} isMyPage={isMyPage} isFollowing={isFollowing} 
  onFollowChange={onFollowChange}  />;
};

export default ProfileHeader;
