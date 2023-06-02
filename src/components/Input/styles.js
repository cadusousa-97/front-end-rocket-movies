import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    margin-bottom: 8px;
    position: relative;
    
    
    > input {
    height: 56px;
    width: 100%;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 0;

    > svg {
    margin-left: 16px;
    }
    }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

export const StyledInput = styled.input`
  padding-left: ${({ hasIcon }) => (hasIcon ? '30px' : '10px')};
`;