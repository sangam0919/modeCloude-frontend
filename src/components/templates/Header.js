// src/components/templates/Header.jsx

import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../images/logo2.png"

// 전체 nav
const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 0;
`;

// 내부 레이아웃 wrapper
const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative; /* 중요! NavLinks 기준점 */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 왼쪽 로고
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    font-size: 1.2rem;
    color: #a472c3;
    margin: 0;
  }
`;

// 중앙 링크 - 완전 중앙 정렬
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
`;

// 오른쪽 프로필
const ProfileSection = styled.div`
  position: relative;
`;

const ProfileCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

// 실제 Header 컴포넌트
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LayoutWrapper>
        <LogoSection>
          <img src={logo} alt="Mood Cloud 로고" />
          <h1>Mood Cloud</h1>
        </LogoSection>

        <NavLinks>
          {/* # 으로 해놔서 에러 뜸 */}
          <a href="#" className="active">홈</a>
          <a href="#">내 일기</a>
          <a href="#">통계</a>
        </NavLinks>

        <ProfileSection>
          <ProfileCircle onClick={() => setOpen(!open)} />
          <Dropdown open={open}>
            <div>로그아웃</div>
          </Dropdown>
        </ProfileSection>
      </LayoutWrapper>
    </Nav>
  );
};

export default Header;
