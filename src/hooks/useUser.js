// hooks/useUser.js
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import { useNavigate } from "react-router-dom";
const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // 토큰을 쿠키로 저장 (Secure, SameSite 설정도 가능)
      document.cookie = `token=${token}; path=/; max-age=86400; Secure; SameSite=None`;

      // 홈 등으로 리다이렉트
      navigate("/main");
      setLoading(true);
    }

  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API_URL}/login/user`, {
        withCredentials: true,
      });
      return res;
    } catch (err) {
      return  err;
    }
  };

  useEffect(() => {
    if (loading) return;
    const {data} = fetchUser();
    setUser(data);
    setLoading(false);
  }, [loading]);

  return { user, loading };
};

export default useUser;
