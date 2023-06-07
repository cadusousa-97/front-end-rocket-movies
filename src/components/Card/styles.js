import { styled } from "styled-components";

export const Container = styled.div`
 padding: 32px;
 border-radius: 16px;
 background-color: ${({ theme }) => theme.COLORS.LOWBRIGHTNESS_PINK};

& + & {
  margin-top: 24px;
}

 > div {
  display: flex;
  flex-direction: column;
 }

 > div > a {
  font-size: 24px;
 }

 > div > button {
  width: 20px;
 }

 > p {
  font-size: 16px;
  font-family: 'Roboto', serif;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 19px;
  
  

 }

 
`