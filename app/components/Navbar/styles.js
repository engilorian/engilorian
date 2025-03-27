import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.sm};
  position: relative;
  z-index: 999;
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
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Hamburger = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenu = styled.ul`
  background: ${({ theme }) => theme.colors.accent};
  border-bottom: ${({ theme }) => theme.borders.beefy};
  border-color: ${({ theme }) => theme.colors.border.primary};
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
