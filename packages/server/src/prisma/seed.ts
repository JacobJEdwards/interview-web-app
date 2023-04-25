import { PrismaClient } from "../../types/generated/client";
import { Role } from "../../types/generated/client";
const db = new PrismaClient();

async function seed() {
    const student = await db.user.upsert({
        where: {
            email: "student@test.com",
        },
        update: {},
        create: {
            name: "Student 1",
            email: "student@test.com",
            password: "password",
            role: Role.STUDENT,
        },
        include: {
            modules: true,
            projects: true,
        },
    });
    const teacher = await db.user.upsert({
        where: {
            email: "teacher@test.com",
        },
        update: {},
        create: {
            name: "Teacher 1",
            email: "teacher@test.com",
            password: "password",
            role: Role.TEACHER,
        },
        include: {
            modules: true,
            projects: true,
        },
    });
    const module = await db.module.create({
        data: {
            name: "Module 1",
            teacherId: teacher.id,
        },
    });
    const addModuleToUser = await db.user.update({
        where: {
            id: student.id,
        },
        data: {
            modules: {
                connect: {
                    id: module.id,
                },
            },
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
