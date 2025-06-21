import Link from "next/link";
import styled, { keyframes } from "styled-components";


const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const SocialIconLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const FooterNavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FooterNavItem = styled.li``;

export const FooterNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
