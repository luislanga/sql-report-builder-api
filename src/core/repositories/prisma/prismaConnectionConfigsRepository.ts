import { Prisma, Connection } from "@prisma/client";
import { connectionConfigsRepository } from "../connectionConfigsRepository";
import { prisma } from "../../../lib/prisma";

export class PrismaConnectionConfigsRepository implements connectionConfigsRepository {
  async create(data: Prisma.ConnectionCreateInput): Promise<Connection> {
    const connection = await prisma.connection.create({ data });

    return connection;
  }

  findByUserId(userId: number): Promise<Connection [] | null> {
    const connections = prisma.connection.findMany({
      where: {
        userId,
      },
    });

    return connections;
  }
  
  findById(id: number): Promise<Connection | null> {
    const connection = prisma.connection.findUnique({
        where: {
          id,
        },
      });
      return connection;
  }
}
