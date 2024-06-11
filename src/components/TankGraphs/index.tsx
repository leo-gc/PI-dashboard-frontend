import { BarChart } from "../BarChart";
import { DonutChart } from "../DonutChart";
import { TimeseriesChart } from "../TimeseriesChart"
import { Container } from "./styles";

type TankGraphsProps = {
  tankNumber: number;
}

export function TankGraphs({ tankNumber }: TankGraphsProps) {
  const now = new Date();
  const startTime = new Date(now.getTime() - 15 * 60 * 1000);
  const newData = Array.from({ length: 100 }, (_, i) => ({
    x: new Date(startTime.getTime() + i * 1000).toISOString(),
    y: Math.random() * 100
  }));

  return <Container>
    <TimeseriesChart data={newData} interval="15min" onClick={() => null} />
    <BarChart />
    <DonutChart 
      percentage={84} 
      onClick={() => null} 
      waterTankNumber={tankNumber.toString()}
      waterTankLevel={3500} 
      isSolo
    />
  </Container>
}