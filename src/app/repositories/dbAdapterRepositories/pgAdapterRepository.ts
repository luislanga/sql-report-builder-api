import { Pool } from 'pg';
import { dbAdapterRepository } from './dbAdapterRepository';

const clientDbConfig = {
  id: "client1",
  type: "postgres",
  host: "localhost",
  port: 5432,
  user: "main",
  password: "main",
  database: "sql-report-builder-api",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

class PgDbConnection {
  private static instance: PgDbConnection;
  private pool: Pool;

  private constructor() {
    this.pool = new Pool(clientDbConfig);
    console.log('!!! New POSTGRES connection instance created !!!')
  }

  public static getInstance(): PgDbConnection {
    if (!PgDbConnection.instance) {
      PgDbConnection.instance = new PgDbConnection();
    }
    return PgDbConnection.instance;
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
  query(query: string): Promise<any> {
    return PgDbConnection.getInstance().pgQuery(query);
  }
}