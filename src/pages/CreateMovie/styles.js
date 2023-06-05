import { styled } from "styled-components";

export const Container = styled.div`
  margin: 40px 50px 0;
  > h1 {
    margin-top: 24px;
  }

  > h3 {
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
export const Form = styled.form`
  margin-top: 40px;

  > div {
    display: flex;
    gap: 40px;
  }

  > textarea {
    margin-top: 40px;
    padding: 20px;
    height: 280px;
    width: 100%;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    resize: none;
   
  }

`