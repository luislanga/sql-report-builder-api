import { Request, Response } from "express";
import { makeCreateConnectionConfigUseCase } from "../../useCases/factories/makeCreateConnectionConfigUseCase";

const app_user = {
  connect: {
    id: 1
  }
};

const clientDbConfig = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  user: "main",
  password: "main",
  database: "sql-report-builder-api",
  app_user,
};

export async function createConnectionConfig(req: Request, res: Response): Promise<Response> {
  try {
    const createConnectionConfigUseCase = makeCreateConnectionConfigUseCase();
    const connection = await createConnectionConfigUseCase.execute(
      clientDbConfig
    );
    return res.status(201).json(connection);
  } catch (error) {
    throw new Error("Algo deu errado");
  }
}

// export async function getUserByEmail(
//   req: Request,
//   res: Response
// ): Promise<Response> {
//   const fakeUser = {
//     email: "teste123@email.com",
//     password: "asdfasdf324",
//   };

//   const getUserByEmailUseCase = makeGetUserByEmailUseCase();

//   const { user } = await getUserByEmailUseCase.execute(fakeUser.email);

//   return res.status(200).json(user);
// }
