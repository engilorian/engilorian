import styled from "styled-components";


export const Section = styled.section`
  background: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.accent};
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  min-height: 20vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xxxl};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SubHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 800px;
`;

export const SmallText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
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
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
`;
