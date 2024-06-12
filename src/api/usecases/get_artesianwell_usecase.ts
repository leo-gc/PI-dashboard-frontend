import { IArtesianWellRepository } from "../repos/artesianwell_repository_interface";

export class GetArtesianWellUsecase {
    constructor(private readonly repo: IArtesianWellRepository) {}
    
    async execute() {
        const artesianwell = await this.repo.getArtesianWell();
        return artesianwell;
    }
}