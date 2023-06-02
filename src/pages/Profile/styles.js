import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.LOWBRIGHTNESS_PINK};

    display: flex;
    align-items: center;
    padding: 0 124px;
    
    svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124 auto 32px;
  display: flex;
  justify-content: center;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    right: 80px;
    cursor: pointer;
  
  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  }
`