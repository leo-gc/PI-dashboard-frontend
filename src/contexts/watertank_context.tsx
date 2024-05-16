import React, { PropsWithChildren } from "react"
import { getLevelFromWatertankResponse } from "../types/responses"
import { GetLevelFromWaterTankUsecase } from "../api/usecases/get_level_from_watertank_usecase"
import { WatertankRepositoryHttp } from "../api/repos/watertank_repository_http"
import { httpApi } from "../api/http"

type WatertankContextType = {
  getLevelFromWatertankResponse: () => Promise<getLevelFromWatertankResponse | undefined>
}

const defaultContext: WatertankContextType = {
 getLevelFromWatertankResponse: async () => undefined
}

export const WatertankContext = React.createContext(defaultContext)


const repo = new WatertankRepositoryHttp(httpApi)
const getLevelFromWatertankUsecase = new GetLevelFromWaterTankUsecase(repo)

export function WatertankContextProvider({ children }: PropsWithChildren) {
  const getLevelFromWatertankResponse = async () => {
    const response = await getLevelFromWatertankUsecase.execute()
    return response
  }

  return (
    <WatertankContext.Provider value={{ getLevelFromWatertankResponse }}>
      {children}
    </WatertankContext.Provider>
  )
}