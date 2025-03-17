import styled from "styled-components";


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
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.xl};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;