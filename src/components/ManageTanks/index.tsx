import { GreenStatus, RedStatus, StatusWrapper, StyledBut, StyledH1, StyledInput, TBODY, TD, TDEND, TDSTART, TR, Table, YellowStatus } from "./styles";

export function ManageTanks() {
  return <>
  <div>
    <nav></nav>
    <StyledH1>  Gerenciar Reservatórios  </StyledH1>
  </div>
  <div>
    <StyledInput type="text" color="black" placeholder=" Pesquisar Reservatório..." />
    <StyledBut> Adicionar Reservatório</StyledBut>
  </div>
  <div style={{ width: '560px' }}>
    <Table>
      <thead>
        <tr>
          <th> ID </th>
          <th> NOME </th>
          <th> STATUS </th>
          <th> AÇÕES </th>
          <th></th>
        </tr>
      </thead>
      <TBODY>
        <TR>
          <TDSTART style={{ fontWeight: 'BOLD' }}>1</TDSTART>
          <TD>Reservatório Bloco U </TD>
          <TD>
            <StatusWrapper>
              <GreenStatus />
            </StatusWrapper></TD>
          <TDEND>
            <i className="fas fa-cog" style={{ fontSize: '100%' }}></i>
          </TDEND>
        </TR>
        <TR>
          <TDSTART style={{ fontWeight: 'BOLD' }}>2</TDSTART>
          <TD>Reservatório Bloco E</TD>
          <TD>
            <StatusWrapper>
              <YellowStatus/>
            </StatusWrapper>
          </TD>
          <TDEND> 
            <i className="fas fa-cog" style={{ fontSize: '100%' }}></i>
          </TDEND>
          
        </TR>
        <TR>
          <TDSTART style={{ fontWeight: 'BOLD' }}>3</TDSTART>
          <TD>Reservatório Bloco W</TD>
          <TD>
            <StatusWrapper>
              <RedStatus></RedStatus>
            </StatusWrapper>
          </TD>
          <TDEND> 
            <i className="fas fa-cog" style={{ fontSize: '100%' }}></i>
          </TDEND>
        </TR>
        
      </TBODY>
    </Table>
  </div>
  </>
}