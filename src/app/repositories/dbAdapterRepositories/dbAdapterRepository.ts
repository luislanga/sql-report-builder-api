export interface dbAdapterRepository {
    query(query: string, dbConfig: any): Promise<any>;
}