// hooks/useUser.js
import { useEffect, useState } from "react";
import axios from "axios";
import {API_URL} from '../constants/api'
const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/login/user`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error("유저 정보 불러오기 실패", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useUser;
