import { dbConfig } from "../../../types/dbConfig";
import { QueryResult } from "../../../types/queryResult";

export interface dbAdapterRepository {
  query(query: string, dbConfig: dbConfig): Promise<QueryResult>;
}
