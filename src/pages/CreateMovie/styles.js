import { styled } from "styled-components";

export const Container = styled.div`

  margin: 40px 50px 0;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h1 {
    margin-top: 24px;
  }

  > h3 {
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div:nth-child(5) {
    display: flex;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    padding: 0 16px 16px;
    margin-top: 24px;

    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 110px;
      gap: 16px;
      font-family: "Roboto", serif;


      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 2px;
      }
    }
    
    > button:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background-color: transparent;
      border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_300};
      transition: .2s;
      max-width: 180px;
    }

    > button:nth-child(2):hover {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border: none;
      color: ${({ theme }) => theme.COLORS.BLACK};
    > svg {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
  }

  > div:nth-child(6) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0 40;

    button {
      min-width: 42vw;
    }

  }

  button:first-child {
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    transition: .2s;
  }

  button:first-child:hover {
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
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
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;
    resize: none;

    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 8px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    }
  }

`