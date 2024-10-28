import { PrismaUsersRepository } from "../../repositories/prisma/prismaUsersRepository";
import { AuthUseCase } from "../authUseCase";

export function makeAuthUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const authUseCase = new AuthUseCase(usersRepository);

    return authUseCase;
}