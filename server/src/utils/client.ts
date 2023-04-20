import { PrismaClient } from "@prisma/client";

// create new instance of PrismaClient for database access
const prisma = new PrismaClient();

export default prisma;
