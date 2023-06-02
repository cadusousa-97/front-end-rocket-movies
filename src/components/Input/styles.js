import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    margin-bottom: 8px;
    
    > input {
    height: 56px;
    width: 100%;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 12px;
    border: 0;

    &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300}
    }

    > svg {
    margin-left: 16px;
    }
    }
`