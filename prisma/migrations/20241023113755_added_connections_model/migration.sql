-- CreateTable
CREATE TABLE "connection" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "database" TEXT NOT NULL,
    "connectionString" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "connection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "connection" ADD CONSTRAINT "connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
