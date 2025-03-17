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
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

export const MotionAccordionContent = styled(motion.div)`
  text-align: left;
  overflow: hidden;

  > * {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
