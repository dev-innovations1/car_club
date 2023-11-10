import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  position: absolute;
  z-index: 2;
  padding-top: 50px;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoImage = styled.img`
  margin-right: -18px;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 60px;
  color: #ff400d;
  font-weight: 800;
  font-size: 14px;
  margin-right: 20px;

  @media (max-width: 835px) {
    gap: 40px;
  }
`;

export const MobileNavLink = styled.div``;

export const NavLink = styled.div`
  cursor: pointer; /* Add pointer for links */
  @media (max-width: 395px) {
    display: none;
  }
`;

export const ArrowImage = styled.img`
  margin-left: 15px;
`;
