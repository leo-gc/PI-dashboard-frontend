/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from "axios";
import { IWatertankRepository } from "./watertank_repository_interface";
import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../../types/responses";

export class WatertankRepositoryHttp implements IWatertankRepository {
  constructor(private readonly http: AxiosInstance) {}

  async getLevelFromWatertank() {
    const response = await this.http.get<getLevelFromWatertankResponse>('/WaterTankLevel')
    return response.data
  }

  async getLevelFromWaterTankByNodeName(nodeName: string) {
    try {// /WaterTankLevel/deviceName/WaterTankLavel_7
      const response = await this.http.get<any>(`/WaterTankLevel/deviceName/${nodeName}`)
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Error fetching data: /WaterTankLevel/' + nodeName + ' - error: ' + error)
    }
  }

  async getAllLastLevels(): Promise<getLastLevelFromWatertankResponse[]> {
    try {
      const response = await this.http.get<getLastLevelFromWatertankResponse[]>('/LastWaterTankLevel')
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Error fetching data: /LastWaterTankLevel - error: ' + error)
    }
  }
}