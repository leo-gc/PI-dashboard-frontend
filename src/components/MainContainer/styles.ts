import styled from 'styled-components';

export const Container = styled.div`
  width: 94%;
  height: 80%;
  background-color: #333333;
  z-index: 3;
  /* Caso queira arredondar os cantos do card */
  border-radius: 10px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`

export const ContainerRow = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`