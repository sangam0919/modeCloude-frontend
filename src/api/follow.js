import axios from 'axios'
import { API_URL } from '../constants/api';

  // 팔로우
export const followUser = async (follower_id, following_id) => {
    const res = await axios.post(`${API_URL}/follow/create`, {
      follower_id,
      following_id,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  };
  
  // 팔로우 있는지 없는지
  export const checkFollowStatus = async (follower_id, following_id) => {
    const res = await axios.get(`${API_URL}/follow/status`, {
      params: {
        follower: follower_id,
        following: following_id,
      },
      withCredentials: true,
    });
    return res.data.isFollowed;
  };
  
  // 언팔로우 
  export const unfollowUser = async (follower_id, following_id) => {
    const res = await axios.delete(`${API_URL}/follow/delete`, {
      data: {
        follower_id,
        following_id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  };