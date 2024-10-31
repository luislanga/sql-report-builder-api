import { Pool } from "pg";
import { dbAdapterRepository } from "./dbAdapterRepository";

class PgDbConnection {
  private static instances: Map<string, PgDbConnection> = new Map();
  private pool: Pool;

  private constructor(config: any) {
    this.pool = new Pool(config);
    console.log(
      `\x1b[95m !!! New POSTGRES connection instance created !!!\x1b[0m Connection Config ID: ${config.id} `
    );
  }

  public static getInstance(config: any): PgDbConnection {
    if (!PgDbConnection.instances.has(config.id)) {
      PgDbConnection.instances.set(config.id, new PgDbConnection(config));
    }
    return PgDbConnection.instances.get(config.id)!;
  }

  public async pgQuery(text: string): Promise<any> {
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
  query(query: string, config: any): Promise<any> {
    const clientDbConfig = {
      id: config.id,
      type: config.type,
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
    return PgDbConnection.getInstance(clientDbConfig).pgQuery(query);
  }
}
