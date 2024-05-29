import { Container, StyledH1 } from "./styles";

export function MainContainer() {
  return <Container>
    <div>
      <StyledH1>  Gerenciar Reservatórios  </StyledH1>
    </div>
    <div>
      <form>
      <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </form>
      <button></button>
    </div>
    <div>

    </div>
  </Container>
}