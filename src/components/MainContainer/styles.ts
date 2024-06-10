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
  flex-direction: column;
  justify-content: center;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
  align-items: center;
`

export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
`

export const RowCharts = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`