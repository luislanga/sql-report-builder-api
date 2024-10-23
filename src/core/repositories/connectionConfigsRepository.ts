import { Prisma, Connection } from '@prisma/client';

export interface connectionConfigsRepository {
    create(data: Prisma.ConnectionCreateInput): Promise<Connection>;
    findByUserId(userId: number): Promise<Connection [] | null>;
    findById(id: number): Promise<Connection | null>;
}