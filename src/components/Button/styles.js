import { styled } from "styled-components";

export const Container = styled.button`

 color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
 background-color: ${({ theme }) => theme.COLORS.PINK};
 
 width: 340px;
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