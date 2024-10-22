export interface ConnectionsRepository {
    getConnection(name: string): Promise<any>;
    query(name: string, query: string): Promise<any>;
}