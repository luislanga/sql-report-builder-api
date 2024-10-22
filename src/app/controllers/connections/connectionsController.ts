import { Pool } from 'pg';

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

class DbConnection {
  private static instance: DbConnection;
  private pool: Pool;


  private constructor() {
    this.pool = new Pool(clientDbConfig);
    console.log('!!! New DbConnection instance created !!!')
  }

  public static getInstance(): DbConnection {
    if (!DbConnection.instance) {
      DbConnection.instance = new DbConnection();
    }
    return DbConnection.instance;
  }

  public async query(text: string, params?: any[]): Promise<any> {
    const client = await this.pool.connect();
    try {
      const res = await client.query(text, params);
      return res;
    } finally {
      client.release();
    }
  }
}

export default DbConnection.getInstance();
