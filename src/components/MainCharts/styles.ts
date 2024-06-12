import styled from 'styled-components';

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

export const AnimatedTitle = styled.h1`
  font-size: 24px;
  color: white;
  animation: blinker 1s linear infinite;
  margin-left: 24px;
  margin-top: 20px;

  @keyframes blinker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`