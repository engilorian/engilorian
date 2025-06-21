import Link from "next/link";
import styled from "styled-components";


export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.accent};
  position: relative;
  z-index: 999;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled(Link)`
  display: block;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MenuWrapper = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100vw;
  height: ${({ open }) => (open ? "calc(100vh - 64px)" : "0")};
  background: ${({ theme }) => theme.colors.accent};
  overflow: hidden;
  z-index: 9999;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ open }) => (open ? "center" : "flex-start")};
  gap: ${({ theme }) => theme.spacing.xl};
  transition: height 0.3s cubic-bezier(.86,0,.07,1);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;


export const MenuItem = styled.li`
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  border-bottom: ${({ theme }) => theme.borders.thick};
  border-color: ${({ theme }) => theme.colors.border.primary};
  text-align: center;
  display: block;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.lg} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
    background: ${({ theme }) => theme.colors.secondary}; 
  }
`;
