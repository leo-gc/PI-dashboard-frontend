import { AxiosInstance } from "axios";
import { IWatertankRepository } from "./watertank_repository_interface";
import { getLevelFromWatertankResponse } from "../../types/responses";

export class WatertankRepositoryHttp implements IWatertankRepository {
  constructor(private readonly http: AxiosInstance) {}

  async getLevelFromWatertank() {
    const response = await this.http.get<getLevelFromWatertankResponse>('/WaterTankLevel')
    return response.data
  }
}