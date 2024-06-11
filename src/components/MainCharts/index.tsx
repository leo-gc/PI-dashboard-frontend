/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { DonutChart } from "../DonutChart";
import { RowCharts, Title } from "./styles";
import { useContext, useEffect, useState } from "react";
import { WatertankContext } from "../../contexts/watertank_context";
import { getLastLevelFromWatertankResponse } from "../../types/responses";
import axios from "axios";

export function MainCharts() {
  const navigate = useNavigate();
  const { getAllLastLevels } = useContext(WatertankContext)
  const [lastLevels, setLastLevels] = useState<getLastLevelFromWatertankResponse[]>([])

  const fetchLastLevels = async () => {
    try {
      // const levels = await getAllLastLevels()
      // const resp = await axios.get<getLastLevelFromWatertankResponse[]>('https://timeseries-api-52f30e35350f.herokuapp.com/api/timeseries/v0.2/smartcampusmaua/LastWaterTankLevel')
      const resp = await fetch('https://timeseries-api-52f30e35350f.herokuapp.com/api/timeseries/v0.2/smartcampusmaua/LastWaterTankLevel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(resp)
      // const levels = resp.data
      // if (levels) setLastLevels(levels)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Title style={{ cursor: 'pointer' }} onClick={fetchLastLevels}>Nível dos Reservatórios</Title>
      <RowCharts>
        { lastLevels.map((l) => {
          return <DonutChart
            key={l.i}
            percentage={l.data_percentage}
            onClick={() => navigate(`/tank/${l.i}`)}
            waterTankNumber={l.i.toString()}
            waterTankLevel={l.data_distance}
            />
        }) }
        {/* <DonutChart 
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
        /> */}
      </RowCharts>
    </>
  )
}