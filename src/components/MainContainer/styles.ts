import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 94%;
  height: 80%;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  background-color: #333333;
  z-index: 3;
  /* Caso queira arredondar os cantos do card */
  border-radius: 10px;
  margin-bottom: 80px;
  color: #ffffff;
`
export const StyledH1 = styled.h1`
  border-bottom: 2px solid #ffffff;
  margin-bottom: 30px; 
`;

export const StyledBut = styled.button`
  border-bottom: 2px solid #ffffff;
  margin-left: 10px;
  background-color: #10BE21;
  color: #ffffff;
  width: 150px;
  height: 30px ;
  border-radius: 10px;
`;
