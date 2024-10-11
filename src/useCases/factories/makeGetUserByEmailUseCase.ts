import { PrismaUsersRepository } from "../../repositories/prisma/prismaUsersRepository";
import { GetUserByEmailUseCase } from "../getUserByEmail";

export function makeGetUserByEmailUseCase() {
  const usersReporsitory = new PrismaUsersRepository();
  const getUserByEmail = new GetUserByEmailUseCase(usersReporsitory);

  return getUserByEmail;
}
