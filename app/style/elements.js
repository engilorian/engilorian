import styled from "styled-components";


export const Section = styled.section`
  background: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.accent};
  border-top: ${({ theme }) => theme.borders.beefy};
  border-color: ${({ theme }) => theme.colors.border.primary};
  min-height: 20vh;
`;

export const Stained = styled.div`
  position: relative;
  width: 100%;
  background: none;
  border: ${({ theme }) => theme.borders.beefy};
  border-color: ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: ${({ color, theme }) =>
      theme.colors.glass[color] || theme.colors.glass.azureBlue};
    background-image: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
      linear-gradient(45deg, rgba(255, 0, 0, 0.2) 15%, transparent 70%),
      radial-gradient(circle at 25% 25%, rgba(0, 0, 255, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(0, 255, 0, 0.25) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.3) 0%, transparent 60%);
    background-blend-mode: multiply;
    border-radius: calc(${({ theme }) => theme.borders.radius.md} - 2px);
    box-sizing: border-box;
    filter: contrast(1.3) saturate(1.6);
    backdrop-filter: blur(10px);
    opacity: 0.95;
    background-size: 200% 200%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: calc(${({ theme }) => theme.borders.radius.md} - 2px);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
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

export const Quote = styled.blockquote`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-style: italic;
  border-left: ${({ theme }) => theme.borders.thick} ${({ theme }) => theme.colors.secondary};
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Text = styled.p`
  color: ${({ color, theme }) => theme.colors.text[color] || theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};

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
