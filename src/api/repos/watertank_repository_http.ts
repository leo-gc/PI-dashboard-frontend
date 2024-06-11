import { AxiosInstance } from "axios";
import { IWatertankRepository } from "./watertank_repository_interface";
import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../../types/responses";

export class WatertankRepositoryHttp implements IWatertankRepository {
  constructor(private readonly http: AxiosInstance) {}

  async getLevelFromWatertank() {
    const response = await this.http.get<getLevelFromWatertankResponse>('/WaterTankLevel')
    return response.data
  }

  async getAllLastLevels(): Promise<getLastLevelFromWatertankResponse[]> {
    try {
      const response = await this.http.get<getLastLevelFromWatertankResponse[]>('/LastWaterTankLevel')
      console.log(response)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Error fetching data: /LastWaterTankLevel - error: ' + error)
    }
  }
}