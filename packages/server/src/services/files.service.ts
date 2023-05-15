import type { File } from "../../types/generated/client";
import { withErrorHandling } from "./utilities";
import { db } from "../utils";
import type { ServiceResponse } from "./utilities";

export const newFile = withErrorHandling(
    async (file: File): Promise<ServiceResponse> => {
        const projectId = file.projectId ?? undefined;
        const submissionId = file.submissionId ?? undefined;
        const { name, filePath, extension } = file;

        const newFile = await db.file.create({
            data: {
                name,
                filePath,
                extension,
                project: {
                    connect: {
                        id: projectId,
                    },
                },
                submission: {
                    connect: {
                        id: submissionId,
                    },
                },
            },
        });

        if (!newFile) {
            return {
                status: 500,
                response: {
                    message: "Failed to create new file",
                },
            };
        }

        return {
            status: 200,
            response: {
                message: "Successfully created new file",
                data: newFile,
            },
        };
    }
);
