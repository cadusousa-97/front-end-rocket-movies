import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width:1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  input {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    margin: 0 64px;
    height: 56px;
    width: 50vw;
    padding: 19px 24px;
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: none;
      border: none;

      &:hover {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`