import { AxiosInstance } from "axios";
import { IArtesianWellRepository } from "./artesianwell_repository_interface";

export class ArtesianWellRepositoryHttp implements IArtesianWellRepository {
  constructor(private readonly http: AxiosInstance) {}

  async getArtesianWell() {
    const response = await this.http.get<any>('/ArtesianWell')
    return response.data
  }
}