export interface dbAdapterRepository {
    query(query: string): Promise<any>;
}