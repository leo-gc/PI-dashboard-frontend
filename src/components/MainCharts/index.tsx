import { useNavigate } from "react-router-dom";
import { DonutChart } from "../DonutChart";
import { RowCharts, Title } from "./styles";

export function MainCharts() {
  const navigate = useNavigate();
  return (
    <>
      <Title>Nível dos Reservatórios</Title>
      <RowCharts>
        <DonutChart 
          percentage={84} 
          onClick={() => navigate('/tank/1')} 
          waterTankNumber={'1'}
          waterTankLevel={3500} 
          />
        <DonutChart 
          percentage={100} 
          onClick={() => navigate('/tank/2')} 
          waterTankNumber={'2'}
          waterTankLevel={4000} 
          />
        <DonutChart 
          percentage={25} 
          onClick={() => navigate('/tank/3')} 
          waterTankNumber={'3'} 
          waterTankLevel={1000} 
          />
        <DonutChart 
          percentage={62} 
          onClick={() => navigate('/tank/4')} 
          waterTankNumber={'4'} 
          waterTankLevel={2500} 
        />
        <DonutChart 
          percentage={46} 
          onClick={() => navigate('/tank/5')} 
          waterTankNumber={'5'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={45} 
          onClick={() => navigate('/tank/6')} 
          waterTankNumber={'6'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={69} 
          onClick={() => navigate('/tank/7')} 
          waterTankNumber={'7'} 
          waterTankLevel={1900} 
        />
        <DonutChart 
          percentage={32} 
          onClick={() => navigate('/tank/8')} 
          waterTankNumber={'8'} 
          waterTankLevel={1900} 
        />
      </RowCharts>
    </>
  )
}