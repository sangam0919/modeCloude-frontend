import axios from 'axios'

export const decodeHashToUid = (hash) => {
    try {
      return Number(atob(hash));
    } catch {
      return null;
    }
  };
  
  export const encodeUidToHash = (uid) => {
    return btoa(String(uid));
  };
  
  export const checkFollowStatus = async (fromUid, toUid) => {
    const res = await axios.get(`/api/follow/status?from=${fromUid}&to=${toUid}`);
    return res.data;
  };
  