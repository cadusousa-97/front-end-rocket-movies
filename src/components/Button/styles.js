import { styled } from "styled-components";

export const Container = styled.button`
 width: 100%;
 color: ${({ theme }) => theme.COLORS.BLACK};
 background-color: ${({ theme }) => theme.COLORS.PINK};

 border-radius: 10px;
 height: 56px;
 border: none;
 padding: 0 16px;
 margin-top: 16px;
 font-weight: 500;

 &:disabled {
  opacity: 0.5;
 }
 
`