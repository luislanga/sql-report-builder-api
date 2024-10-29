import { dbAdapterRepository } from "../repositories/dbAdapterRepositories/dbAdapterRepository";

export class DbUseCase {
    constructor(private dbAdapterRepository: dbAdapterRepository) {}

    async execute(query: string, dbConfig: any): Promise<any> {
        return this.dbAdapterRepository.query(query, dbConfig);
    }
}