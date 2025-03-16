import styled, { keyframes } from "styled-components";


const pulseAnimation = keyframes`
  0% {
    opacity: 0.3;
    box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primary};
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 8px 4px ${({ theme }) => theme.colors.primary};
  }
  100% {
    opacity: 0.3;
    box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Contain = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borders.radius.pill};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  align-items: center;
`;

export const Cue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 14px;
  height: 14px;
`;

export const Pulse = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  animation: ${pulseAnimation} 1.5s infinite ease-in-out;
`;

export const Activity = styled.span`
  color: ${({ theme }) => theme.colors.text.light};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
