import { Request, Response } from "express";
import { makePGQueryDbUsecase } from "../../useCases/factories/makeDbUseCase";
import { makeGetConnectionConfigsUseCase } from "../../../core/useCases/factories/makeGetConnectionConfigsUseCase";
import { QueryResult } from "../../../types/queryResult";

interface QueryField {
  name: string;
}

export async function queryDb(req: Request, res: Response): Promise<Response> {
  const { query, dbId } = req.body;
  const currentUser = req.user;

  const connectionConfigs = makeGetConnectionConfigsUseCase();
  const { connection } = await connectionConfigs.execute(dbId);

  if (!connection) {
    return res.status(404).json({ message: "Connection not found" });
  }

  if (currentUser?.id !== connection?.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const dbConfig = {
    id: connection.id,
    type: connection.type,
    host: connection.host,
    port: connection.port,
    user: connection.user,
    password: connection.password,
    database: connection.database,
  };

  try {
    const queryDb = makePGQueryDbUsecase();
    const queryResult: QueryResult = await queryDb.execute(
      query,
      dbConfig
    );
    const results = {
      fields: queryResult.fields.map((field: QueryField) => field.name),
      rows: queryResult.rows,
    };
    return res.status(200).json(results);
  } catch {
    throw new Error("Algo deu errado");
  }
}
