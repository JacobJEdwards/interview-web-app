import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    const teacher = await db.teacher.create({
        data: {
            name: "Teacher 1",
            email: "test@test.com",
            password: "password",
        },
    });
    const module = await db.module.create({
        data: {
            name: "Module 1",
            teacherId: teacher.id,
        },
    });
    const project = await db.project.create({
        data: {
            name: "Project 1",
            description: "Project 1 description",
            moduleId: module.id,
            teacherId: teacher.id,
        },
    });
}

seed()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
