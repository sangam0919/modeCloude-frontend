import React, { useState, useEffect, useCallback } from 'react';
import Profilesetup from '../../atoms/Edit/Profilesetup'; 
import styled from 'styled-components';
import Text from '../../atoms/Text'; 
import axios from 'axios';
import { API_URL } from '../../../constants/api'; 

const StyledContentWrapper = styled.div`
  min-height: 550px; 
  background-color: #fff; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); 
  display: flex;
  flex-direction: column; 
  width: 100%;
`;

const FollowListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1; 
`;

const FollowSection = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 

  &:first-child {
    border-right: 3px solid #eee;
  }
`;

const FriendHead = styled.div`
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  background-color: white; 
`;

const FriendsDataScrollable = styled.div`
  height: 350px; 
  overflow-y: auto; 
  display: flex; 
  flex-direction: column; 
  
`;

const FriendsList = styled.div`
  padding: 15px; 
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e0e0e0;
`;

const RemoveButton = styled.button`
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  color: #c62828;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #ffcdd2;
    color: #b71c1c;
  }
`;

const MessageText = styled(Text)`
  display: flex;
  flex-grow: 1; /* FriendsDataScrollable의 공간을 채움 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  text-align: center;
  padding: 15px; /* 내부 패딩 */
  color: #757575;
  font-size: 1rem;
`;

const Friendcontent = () => {
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFollowData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/api/setting/lists`, {
        withCredentials: true,
      });
      if (response.data && response.data.success) {
        setFollowers(response.data.followers || []);
        setFollowings(response.data.followings || []);
      } else {
        throw new Error(response.data.message || '데이터를 불러오는데 실패했습니다.');
      }
    } catch (err) {
      console.error("팔로우 데이터 로딩 실패:", err);
      const errorMessage = err.response?.data?.message || err.message || '데이터 로딩 중 오류가 발생했습니다.';
      setError(errorMessage);
      setFollowers([]);
      setFollowings([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFollowData();
  }, [fetchFollowData]);

  const handleUnfollow = async (userIdToUnfollow) => {
    if (!window.confirm("정말로 이 사용자를 언팔로우 하시겠습니까?")) return;
    try {
      const response = await axios.delete(`${API_URL}/api/setting/${userIdToUnfollow}`, {
        withCredentials: true,
      });
      if (response.data && response.data.success) {
        setFollowings(prevFollowings => prevFollowings.filter(user => user.uid !== userIdToUnfollow));
        alert(response.data.message || '성공적으로 언팔로우했습니다.');
      } else {
        throw new Error(response.data.message || '언팔로우에 실패했습니다.');
      }
    } catch (err) {
      alert(err.response?.data?.message || err.message || '언팔로우 중 오류가 발생했습니다.');
    }
  };

  const handleRemoveFollower = (userIdToRemove) => {
    if (!window.confirm("정말로 이 팔로워를 삭제하시겠습니까? 이 작업은 상대방에게 알림이 가지 않으며, 상대방은 여전히 당신을 팔로우 시도할 수 있습니다.")) return;
    alert(`팔로워 (ID: ${userIdToRemove}) 제거 기능은 아직 지원하지 않습니다.`);

  };

  const renderListContent = (list, type, emptyMsg) => {
    if (list.length === 0) {
      return <MessageText>{emptyMsg}</MessageText>;
    }
    return (
      <FriendsList>
        {list.map(user => (
          <FriendItem key={user.uid}>
            <UserInfo>
              <ProfileImage src={user.profile_image || '/images/default-profile.png'} alt={`${user.nick_name} 프로필`} />
              <Text weight="500">{user.nick_name}</Text>
            </UserInfo>
            <RemoveButton onClick={() => type === 'follower' ? handleRemoveFollower(user.uid) : handleUnfollow(user.uid)}>
              {type === 'follower' ? '삭제' : '언팔로우'}
            </RemoveButton>
          </FriendItem>
        ))}
      </FriendsList>
    );
  };

  if (isLoading) {
    return (
      <Profilesetup>
        <MessageText>목록을 불러오는 중입니다...</MessageText>
      </Profilesetup>
    );
  }

  if (error) {
    return (
      <Profilesetup>
        <MessageText color="red">오류: {error}</MessageText>
      </Profilesetup>
    );
  }

  return (
    <Profilesetup> 
      <FollowListContainer>
        <FollowSection>
          <FriendHead>
            <Text weight={"bold"} size={"1.2rem"}>팔로워</Text>
          </FriendHead>
          <FriendsDataScrollable>
            {renderListContent(followers, 'follower', '팔로워가 없습니다.')}
          </FriendsDataScrollable>
        </FollowSection>

        <FollowSection>
          <FriendHead>
            <Text weight={"bold"} size={"1.2rem"}>팔로잉</Text>
          </FriendHead>
          <FriendsDataScrollable>
            {renderListContent(followings, 'following', '팔로우하는 사용자가 없습니다.')}
          </FriendsDataScrollable>
        </FollowSection>
      </FollowListContainer>
    </Profilesetup>
  );
};

export default Friendcontent;