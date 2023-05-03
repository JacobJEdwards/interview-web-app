import { type FC, memo } from "react";
import { Link } from "@remix-run/react";
import type { Project as ProjectType } from "server/types/generated/client";

type ProjectProps = ProjectType & { disabled?: boolean };

const Project: FC<ProjectProps> = ({ name, description, id, disabled }) => {
    return (
        <div className="flex flex-col prose max-w-none mt-5">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{description}</p>
            <p></p>
            <Link
                className={disabled ? "btn btn-disabled mt-2" : "btn mt-2"}
                to={id.toString()}
            >
                View Project
            </Link>
        </div>
    );
};

export default memo(Project);
