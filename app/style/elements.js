import styled, { keyframes } from "styled-components";

const glassAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`


export const Section = styled.section`
  background: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.accent};
  border-top: ${({ theme }) => theme.borders.beefy};
  border-color: ${({ theme }) => theme.colors.border.primary};
  min-height: 20vh;
`;
export const Stained = styled.div`
  position: relative;
  background: none;
  border: ${({ theme }) => theme.borders.beefy};
  border-color: ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borders.radius.md};

  padding: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: ${({ color, theme }) =>
      theme.colors.glass[color] || theme.colors.glass.azureBlue};

    background-image: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 40%), 
      linear-gradient(45deg, rgba(255, 255, 255, 0.1) 20%, transparent 80%), 
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), 
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      
    background-blend-mode: screen;
    border-radius: calc(${({ theme }) => theme.borders.radius.md} - 2px);
    box-sizing: border-box;

    filter: contrast(1.2) saturate(1.5);
    backdrop-filter: blur(8px);
    opacity: 0.9;

    background-size: 150% 150%;
    animation: glassAnimation 15s ease-in-out infinite;

    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Spacer = styled.div`
  height: ${({ size, theme }) => theme.spacing[size] || theme.spacing.lg};
  width: 100%;
`;

export const Br = styled.br`
  display: block;
  content: "";
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;   

export const SideBySide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const Heading = styled.h1`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xxxl};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    color: ${({ $hovercolor, theme }) => theme.colors[$hovercolor]};
  }
`;

export const SubHeading = styled.h2`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &:hover {
    color: ${({ $hovercolor, theme }) => theme.colors[$hovercolor]};
  }
`;

export const Text = styled.p`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 800px;

  &:hover {
    color: ${({ $hovercolor, theme }) => theme.colors[$hovercolor]};
  }
`;

export const SmallText = styled.p`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};

  &:hover {
    color: ${({ $hovercolor, theme }) => theme.colors[$hovercolor]};
  }
`;

export const Bold = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

export const List = styled.ul`
  list-style-type: disc;
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
`;

export const ListItem = styled.li`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};

  &:hover {
    color: ${({ $hovercolor, theme }) => theme.colors[$hovercolor]};
  }
`;
