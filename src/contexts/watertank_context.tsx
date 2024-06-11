import React, { PropsWithChildren } from "react"
import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../types/responses"
import { GetLevelFromWaterTankUsecase } from "../api/usecases/get_level_from_watertank_usecase"
import { WatertankRepositoryHttp } from "../api/repos/watertank_repository_http"
import { httpApi } from "../api/http"
import { GetLastLevelFromWatertankUsecase } from "../api/usecases/get_last_levels_from_watertanks_usecase"

type WatertankContextType = {
  getLevelFromWatertank: () => Promise<getLevelFromWatertankResponse | undefined>
  getAllLastLevels: () => Promise<getLastLevelFromWatertankResponse[] | undefined>
}

const defaultContext: WatertankContextType = {
 getLevelFromWatertank: async () => undefined,
 getAllLastLevels: async () => undefined
}

export const WatertankContext = React.createContext(defaultContext)


const repo = new WatertankRepositoryHttp(httpApi)
const getLevelFromWatertankUsecase = new GetLevelFromWaterTankUsecase(repo)
const getAllLastLevelsFromWatertanksUsecase = new GetLastLevelFromWatertankUsecase(repo)

export function WatertankContextProvider({ children }: PropsWithChildren) {
  const getLevelFromWatertank = async () => {
    const response = await getLevelFromWatertankUsecase.execute()
    return response
  }

  const getAllLastLevels = async () => {
    const response = await getAllLastLevelsFromWatertanksUsecase.execute()
    return response
  }

  return (
    <WatertankContext.Provider value={{ getLevelFromWatertank, getAllLastLevels }}>
      {children}
    </WatertankContext.Provider>
  )
}