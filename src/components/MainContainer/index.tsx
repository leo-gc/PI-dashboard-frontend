import { Container, StyledH1, StyledBut } from "./styles";

export function MainContainer() {
  return <Container>
    <div>
      <StyledH1>  Gerenciar Reservatórios  </StyledH1>
    </div>
    <div>
      <form>
          <input type="text" placeholder="Pesquisar Reservatório..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
          <StyledBut> Adicionar Reservatório</StyledBut>
        </form>
      
    </div>
    <div>

    </div>
  </Container>
}