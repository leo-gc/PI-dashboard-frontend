import styled from 'styled-components';

export const StyledH1 = styled.h1`
  border-bottom: 1px solid #ffffff;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 600px;
  text-align: center;
  
`;

export const StyledBut = styled.button`
  margin-left: 10px;
  background-color: #10BE21;
  color: #ffffff;
  width: 170px;
  height: 30px ;
  border-radius: 10px;
  font-weight : bold ;
`;

export const StyledInput = styled.input`
  margin-left: 10px;
  background-color: #ffffff;
  color: #000000;
  width: 400px;
  height: 30px ;
  border-radius: 10px;
  &::placeholder { 
    font-weight : bold ;
    color: black;
    opacity: 1;
  }
`;

export const GreenStatus = styled.div`
  width: 20px;
  height: 20px;
  background-color: #08D210;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YellowStatus = styled.div`
  width: 20px;
  height: 20px;
  background-color: #D2AD2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedStatus = styled.div`
  width: 20px;
  height: 20px;
  background-color: #C81D12;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TD = styled.td`
  text-align: center;
  vertical-align: middle;
  border-bottom: 5px solid #333333;
  
`;

export const TR = styled.tr`
  
  
`;
export const TBODY = styled.tbody`
  background-color: #ffffff;
  color: #000000;
  width: 400px;
  
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  margin-top: 10%;
  
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
 
export const TDEND = styled.td`
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  border-bottom: 5px solid #333333;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const TDSTART = styled.td`
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  border-bottom: 5px solid #333333;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;