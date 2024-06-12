/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from "react";
import { BarChart } from "../BarChart";
import { DonutChart } from "../DonutChart";
import { TimeseriesChart } from "../TimeseriesChart"
import { Container } from "./styles";
import { WatertankContext } from "../../contexts/watertank_context";

type TankGraphsProps = {
  tankNumber: number;
}

export function TankGraphs({ tankNumber }: TankGraphsProps) {
  const { lastLevels, getLevelFromWatertankByNodeName } = useContext(WatertankContext)
  const [tankNodeName, setTankNodeName] = React.useState<any>()
  const lastLevel = lastLevels?.filter(level => level.i === tankNumber)[0]

  const now = new Date();
  const startTime = new Date(now.getTime() - 15 * 60 * 1000);
  const newData = Array.from({ length: 100 }, (_, i) => ({
    x: new Date(startTime.getTime() + i * 1000).toISOString(),
    y: Math.random() * 100
  }));

  const fetchTankbyNodeName = async () => {
    try {
      console.log('fetch')
      const resp = await getLevelFromWatertankByNodeName(tankNumber.toString())
      setTankNodeName(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTankbyNodeName()
  }, [])

  return <Container>
    {/* <h1 style={{ cursor: 'pointer' }} onClick={fetchTankbyNodeName} >cuzinho</h1> */}
    <TimeseriesChart data={tankNodeName} />
    <BarChart />
    <DonutChart 
      percentage={lastLevel ? lastLevel.data_percentage : 0} 
      onClick={() => null} 
      waterTankNumber={tankNumber.toString()}
      waterTankLevel={lastLevel ? lastLevel.data_percentage : 0} 
      isSolo
    />
  </Container>
}