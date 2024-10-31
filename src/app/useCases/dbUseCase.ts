import { dbConfig } from "../../types/dbConfig";
import { QueryResult } from "../../types/queryResult";
import { dbAdapterRepository } from "../repositories/dbAdapterRepositories/dbAdapterRepository";

export class DbUseCase {
    constructor(private dbAdapterRepository: dbAdapterRepository) {}

    async execute(query: string, dbConfig: dbConfig): Promise<QueryResult> {
        return this.dbAdapterRepository.query(query, dbConfig);
    }
}