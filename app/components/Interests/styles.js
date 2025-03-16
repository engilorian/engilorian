import styled from "styled-components";
import { motion } from "framer-motion";


export const AccordionContainer = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const AccordionItem = styled.div`
  border-bottom: ${({ theme }) => `${theme.borders.thick} ${theme.colors.foreground}`};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const AccordionHeader = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MotionAccordionContent = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.light};
  text-align: left;
  overflow: hidden;

  > * {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
