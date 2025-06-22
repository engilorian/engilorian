import styled from "styled-components";


export const WrapContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
`;

export const Portrait = styled.div`
  float: left;
  width: 200px;
  height: 200px;
  margin-right: ${({ theme }) => theme.spacing.md};
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  border-radius: ${({ theme }) => theme.borders.radius.round};
  overflow: hidden;
`;

export const Copy = styled.div`

& > * {
    margin-top: 0;
  }
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  text-align: justify;
`;
