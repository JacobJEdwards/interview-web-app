import { Form } from "@remix-run/react";
import type { FC } from "react";
import type { Project as ProjectType } from "server/types/generated/client";

interface ProjectFormProps {
    project?: ProjectType;
    edit: boolean;
    actionData: any;
}

const ProjectForm: FC<ProjectFormProps> = ({ project, edit, actionData }) => {
    return (
        <Form
            method="post"
            reloadDocument
            className="w-full form-control"
            encType="multipart/form-data"
        >
            {actionData && (
                <div className="alert alert-error shadow-lg mt-4 mb-4 flex items-centre justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="font-semibold">Invalid name or description</span>
                </div>
            )}
            <div className="mb-4 w-full">
                <label htmlFor="name" className="label">
                    <span className="label-text font-semibold">Project name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter project name..."
                    className="input input-bordered w-full bg-gray-800 placeholder:italic"
                    defaultValue={edit ? project?.name : ""}
                    required
                />
            </div>
            <div className="mb-4 w-full">
                <label className="label" htmlFor="description">
                    <span className="label-text font-semibold">Project description</span>
                </label>
                <textarea
                    rows={5}
                    placeholder="Enter project description..."
                    name="description"
                    id="description"
                    className="textarea textarea-bordered w-full h-24 bg-gray-800 placeholder:italic"
                    defaultValue={edit ? project?.description : ""}
                    required
                />
            </div>
            {!edit && (
                <div className="mb-4 w-full">
                    <label className="label" htmlFor="dateDue">
                        <span className="label-text font-semibold">Due date</span>
                    </label>
                    <input
                        type="date"
                        name="dateDue"
                        id="dateDue"
                        className="input input-bordered w-full bg-gray-800 placeholder:italic"
                        required
                    />
                </div>
            )}
            <div className="w-full mb-4">
                <label className="label" htmlFor="fileupload">
                    <span className="label-text font-semibold">File upload</span>
                </label>
                <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    id="fileupload"
                    name="fileupload"
                />
            </div>
            <button className="btn btn-block mt-8" type="submit">
                {edit ? "Update" : "Create"}
            </button>
        </Form>
    );
};

export default ProjectForm;
