import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import logo from "../../images/logo2.png"
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'; 


// 전체 nav
const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 0;
`;

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 1.2rem;
    color: #a472c3;
    margin: 0;
  }
  a {
      text-decoration: none;
      color: inherit; 
    }

`;

const NavLinks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #666;
    font-weight: 500;

    &.active {
      color: #c271d2;
      font-weight: 600;
    }

    &:hover {
      color: #a472c3;
    }
  }
  @media (max-width: 768px) {
  position: static;
  transform: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin-top: 10px;
}
`;

const ProfileSection = styled.div`
  position: relative;
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden; /* <- 이거만 추가하면 동그라미 안에 이미지 잘림 */
`;

const Dropdown = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: ${({ open }) => (open ? 'block' : 'none')};
  min-width: 120px;
a {
  display: block;
  padding: 0.6rem 1rem;
  text-decoration: none;
  color: #444;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background-color: #f6effb;
    color: #a472c3;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
}
`;


const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useUser(); 


  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Nav>
      <LayoutWrapper>
        <LogoSection>
          <img src={logo} alt="Mood Cloud 로고" />
          <h1>
             <Link to="/main">Mood Cloud</Link>
          </h1>
        </LogoSection>

        <NavLinks>
          {/* # 으로 해놔서 에러 뜸 */}
          <Link to="/main" className="active">홈</Link>
          <Link to="/write">내 일기</Link>
          <Link to="/edit">통계</Link>
        </NavLinks>

        <ProfileSection ref={dropdownRef}>
          <ProfileCircle onClick={() => setOpen(!open)} >
          {user && user.profile && (
      <img
        src={user.profile}
        alt="프로필"
        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
      />
    )}
      </ ProfileCircle>
          <Dropdown open={open}>
            <Link to="/mypage">내정보</Link>
            <a href='http://localhost:4000/login/logout'>로그아웃</a>
          </Dropdown>
        </ProfileSection>
      </LayoutWrapper>
    </Nav>
  );
};

export default Header;
