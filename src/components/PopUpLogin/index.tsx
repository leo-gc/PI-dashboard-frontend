/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from "react";
import { Container } from "./styles";
import { WatertankContext } from "../../contexts/watertank_context";
import { getLevelFromWatertankResponse } from "../../types/responses";

export function PopUpLogin() {
  const [dataOfLevels, setDataOfLevels] = useState<getLevelFromWatertankResponse>()

  const { getLevelFromWatertank } = useContext(WatertankContext)

  async function getLevelFromWatertankFunc() {
    const response = await getLevelFromWatertank()
    setDataOfLevels(response)
  }

  useEffect(() => {
    getLevelFromWatertankFunc()
  }, [])

  return <Container>
    <h1>PopUpLogin</h1>
    <p>{`dataOfLevels: ${dataOfLevels}`}</p>
  </Container>
}