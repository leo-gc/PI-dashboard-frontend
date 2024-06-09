import { DonutChart } from "../DonutChart";
import { Container } from "./styles";



export function MainContainer() {
  return <Container>
      <DonutChart value={84} onClick={() => console.log('clicked')} waterTankNumber={'1'} />
      <DonutChart value={100} onClick={() => console.log('clicked')} waterTankNumber={'2'} />
      <DonutChart value={25} onClick={() => console.log('clicked')} waterTankNumber={'3'} />
      <DonutChart value={62} onClick={() => console.log('clicked')} waterTankNumber={'4'} />
      {/* <DonutChart value={46} onClick={() => console.log('clicked')} />
      <DonutChart value={46} onClick={() => console.log('clicked')} />
      <DonutChart value={69} onClick={() => console.log('clicked')} />
      <DonutChart value={32} onClick={() => console.log('clicked')} /> */}
  </Container>
}