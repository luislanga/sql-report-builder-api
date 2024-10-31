import { Client, Pool } from "pg";
import { dbAdapterRepository } from "./dbAdapterRepository";
import { dbConfig } from "../../../types/dbConfig";
import { QueryResult } from "../../../types/queryResult";

interface ClientDbConfigPg {
  id: number;
  type: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
}

class PgDbConnection {
  private static instances: Map<number, PgDbConnection> = new Map();
  private pool: Pool;

  private constructor(clientDbConfig: ClientDbConfigPg) {
    this.pool = new Pool(clientDbConfig);
    console.log(
      `\x1b[95m !!! New POSTGRES connection instance created !!!\x1b[0m Connection Config ID: ${clientDbConfig.id} `
    );
  }

  public static getInstance(config: ClientDbConfigPg): PgDbConnection {
    if (!PgDbConnection.instances.has(config.id)) {
      PgDbConnection.instances.set(config.id, new PgDbConnection(config));
    }
    return PgDbConnection.instances.get(config.id)!;
  }

  public async pgQuery(text: string): Promise<QueryResult> {
    const client = await this.pool.connect();
    try {
      const res = await client.query(text);
      return res;
    } finally {
      client.release();
    }
  }
}

export class PgAdapterRepository implements dbAdapterRepository {
  query(query: string, dbConfig: dbConfig): Promise<QueryResult> {
    const clientDbConfig = {
      id: dbConfig.id,
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
    return PgDbConnection.getInstance(clientDbConfig).pgQuery(query);
  }
}
