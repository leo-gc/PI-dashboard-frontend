import { Container } from "./styles";

export function MainContainer() {
  return <Container>
    <div>
      <h1>Gerenciar Reservatorios</h1>
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