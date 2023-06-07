import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 50px 0;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      margin-right: 7px;
      size: 16px;
    }
  }
`
export const Content = styled.div`
  flex-direction: column;
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

  margin: 0 50px;  
  > h1 {
    font-size: 32px;
  }
  `
  


