import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserStatsById } from '../../../api/user';
import FollowButton from '../../molecules/detail/FollowButton';
import useUser from '../../../hooks/useUser';

const Wrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px;
  background: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgb(221, 221, 221);
  margin: 0px auto 15px;
`;

const AvatarBio = styled.div`
  font-size: 0.9rem;
  color: rgb(119, 119, 119);
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AvatarName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(68, 68, 68);
  margin-bottom: 5px;
`;

const AuthorStats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 15px;
`;

const AuthorStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: rgb(153, 153, 153);
`;

const StatCount = styled.div`
  font-weight: 600;
  color: rgb(68, 68, 68);
`;

const Widget = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px;
  background: white;
  border-radius: 15px;
  padding: 20px;
`;

const Profile = ({ diary }) => {
  const [stats, setStats] = useState({
    diaryCount: 0,
    followerCount: 0,
    followingCount: 0,
  });

  const { user, loading: userLoading } = useUser();
  const myId = user?.uid;
  const [isFollowing, setIsFollowing] = useState(null);
  useEffect(() => {
    if (diary?.writer?.uid) {
      const fetchStats = async () => {
        try {
          const data = await getUserStatsById(diary.writer.uid);
          setStats(data);
        } catch (err) {
          console.error('통계 로딩 실패:', err);
        }
      };
      fetchStats();
    }
  }, [diary?.writer?.uid]);

  if (!diary || userLoading) return null;

  return (
    <Wrap>
      <Avatar
        style={{
          backgroundImage: `url(${diary.writer?.profile_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <AvatarName>{diary?.writer?.nick_name}</AvatarName>
      <AvatarBio>일상의 소소한 행복을 기록하는 글쓰기를 좋아합니다.</AvatarBio>

      {myId && diary.writer?.uid && (
     <FollowButton
     myId={myId}
     targetId={diary.writer.uid}
     onFollowChange={async () => {
       try {
         const updatedStats = await getUserStatsById(diary.writer.uid);
         setStats(updatedStats); 
       } catch (err) {
         console.error('팔로우 변경 후 통계 재로딩 실패:', err);
       }
     }}
   />
      )}

      <AuthorStats>
        <AuthorStat>
          <StatCount>{stats.diaryCount}</StatCount>
          <StatLabel>일기</StatLabel>
        </AuthorStat>
        <AuthorStat>
          <StatCount>{stats.followerCount}</StatCount>
          <StatLabel>팔로워</StatLabel>
        </AuthorStat>
        <AuthorStat>
          <StatCount>{stats.followingCount}</StatCount>
          <StatLabel>팔로잉</StatLabel>
        </AuthorStat>
      </AuthorStats>

      <Widget>{/* 위젯 내용 */}</Widget>
    </Wrap>
  );
};

export default Profile;
