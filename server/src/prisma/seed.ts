import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    await Promise.all(
        getModules().map(async (module) => {
            await db.module.create({
                data: module,
            });
        })
    );
    await Promise.all(
        getTeachers().map(async (teacher) => {
            await db.teacher.create({
                data: teacher,
            });
        })
    );
    await Promise.all(
        getStudents().map(async (student) => {
            await db.student.create({
                data: student,
            });
        })
    );
    await Promise.all(
        getProjects().map(async (project) => {
            await db.project.create({
                data: project,
            });
        })
    );
}

seed();

function getModules() {
    return [];
}

function getTeachers() {
    return [];
}

function getStudents() {
    return [];
}

function getProjects() {
    return [];
}
