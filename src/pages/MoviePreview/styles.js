import { styled } from "styled-components";

export const Container = styled.div`
  margin: 40px 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: left;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .details {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 24px;
  }


  div > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  section {
    margin: 40px 0;
  }

  span {
    background-color: ${({ theme }) => theme.COLORS.LOWBRIGHTNESS_PINK};
    display: inline-block;
  }

  p {
    text-align: justify;
    margin-right: 12px;
  }
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  max-height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
  width: 8px;
  }

  &::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 8px;
  }

`