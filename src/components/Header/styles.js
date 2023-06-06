import { styled } from "styled-components";

export const Container = styled.header`
  height: 105px;
  width: 100%;

  border-bottom-width:1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-around;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div:nth-child(2) {
    width: 500px;
  }
`

export const Profile = styled.div`
  display: flex;
  

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div:nth-child(1) {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    } 
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
`