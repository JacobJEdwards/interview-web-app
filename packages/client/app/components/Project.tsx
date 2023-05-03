import { type FC, memo } from "react";
import { Link } from "@remix-run/react";
import type { Project as ProjectType } from "server/types/generated/client";

const Project: FC<ProjectType> = ({ name, description, id }) => {
    return (
        <div className="flex flex-col prose max-w-none mt-5">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{description}</p>
            <p></p>
            <Link className="btn mt-2" to={id.toString()}>
                View Project
            </Link>
        </div>
    );
};

export default memo(Project);
