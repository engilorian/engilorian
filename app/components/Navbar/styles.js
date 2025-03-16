import styled, { keyframes } from "styled-components";


const shootSpin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(1.3);
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
`;

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled.div`
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 50px;
  width: auto;
  will-change: transform;

  &:hover {
    animation: ${shootSpin} 1s ease-out;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fonts.sizes.xl};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;