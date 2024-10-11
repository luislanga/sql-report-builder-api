import { Prisma, User } from "@prisma/client";
import { usersRepository } from "../usersRepository";
import { prisma } from "../../lib/prisma";

export class PrismaUsersRepository implements usersRepository {
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({ data });

    return user
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
}
