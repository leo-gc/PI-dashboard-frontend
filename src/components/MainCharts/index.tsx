import { DonutChart } from "../DonutChart";
import { RowCharts, Title } from "./styles";

export function MainCharts() {
  return (
    <>
      <Title>Nível dos Reservatórios</Title>
      <RowCharts>
        <DonutChart 
          percentage={84} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'1'}
          waterTankLevel={3500} 
          />
        <DonutChart 
          percentage={100} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'2'}
          waterTankLevel={4000} 
          />
        <DonutChart 
          percentage={25} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'3'} 
          waterTankLevel={1000} 
          />
        <DonutChart 
          percentage={62} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'4'} 
          waterTankLevel={2500} 
        />
        <DonutChart 
          percentage={46} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'5'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={45} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'6'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={69} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'7'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={32} 
          onClick={() => console.log('clicked')} 
          waterTankNumber={'8'} 
          waterTankLevel={1900} 
        />
      </RowCharts>
    </>
  )
}