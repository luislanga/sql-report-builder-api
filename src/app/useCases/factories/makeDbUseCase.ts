import { PgAdapterRepository } from "../../repositories/dbAdapterRepositories/pgAdapterRepository";
import { DbUseCase } from "../dbUseCase";

export function makePGQueryDbUsecase() {
  const dbRepository = new PgAdapterRepository();
  const queryDb = new DbUseCase(dbRepository);

  return queryDb;
}
