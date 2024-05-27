import styled from 'styled-components';
import { VscAccount } from "react-icons/vsc";
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 96%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10%;
  z-index: 5;
  position: absolute;
  top: -130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`

export const PopUpContainer = styled.div`
  width: 40%;
  height: 70%;
  background-color: #3333;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #004684;
  `

export const Icon = styled(VscAccount)`
  width: 100px;
  height: 100px;
  color: white;
  margin-bottom: 40px;
`
export const InputLabel = styled.p`
  margin-top: 20px;
  font-size: 24px;
  color: white;
`

export const Input = styled.input`
  width: 60%;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 16px;
  background-color: #5555;
  color: white;

  &:focus {
    outline: none;
    border: 1px solid #004684;
  }
`

export const Button = styled.button`
  width: 40%;
  height: 40px;
  margin-top: 32px;
  border-radius: 10px;
  border: none;
  background-color: #2E7722;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, '#2E7722')};
  }
`
