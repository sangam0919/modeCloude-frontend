// hooks/useUser.js
import { useEffect, useState } from "react";
import axios from "axios";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/login/user", {
          withCredentials: true, // 쿠키 포함
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
