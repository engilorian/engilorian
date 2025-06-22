import styled, { keyframes } from "styled-components";


const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const PressPlayContainer = styled.div`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.glass.amethyst},
    ${({ theme }) => theme.colors.glass.golden},
    ${({ theme }) => theme.colors.glass.violet},
    ${({ theme }) => theme.colors.glass.ruby}
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 12s ease infinite;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  margin: ${({ theme }) => theme.spacing.lg};
`;


export const IframeWrapper = styled.iframe`
  width: 100%;
  height: 80px;
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;
