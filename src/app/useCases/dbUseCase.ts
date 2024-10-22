import { dbAdapterRepository } from "../repositories/dbAdapterRepositories/dbAdapterRepository";

export class DbUseCase {
    constructor(private dbAdapterRepository: dbAdapterRepository) {}

    async execute(query: string): Promise<any> {
        return this.dbAdapterRepository.query(query);
    }
}