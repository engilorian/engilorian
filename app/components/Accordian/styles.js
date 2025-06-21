import styled from "styled-components";
import { motion } from "framer-motion";


export const AccordionContainer = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const AccordionItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const AccordionHeader = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  border-bottom: ${({ theme }) => theme.borders.thick};
  border-color: ${({ theme }) => theme.colors.border.secondary};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const MotionAccordionContent = styled(motion.div)`
  text-align: left;
  overflow: hidden;

  > * {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
