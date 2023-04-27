import type { FC } from "react";
import { Link } from "@remix-run/react";

interface ProjectProps {
  name: string;
  description: string;
  projectId: number;
  teacherId: number;
}

const Project: FC<ProjectProps> = ({
  name,
  description,
  teacherId,
  projectId,
}) => {
  return (
    <div className="flex flex-col prose max-w-none mt-5">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>{description}</p>
      <p>
        Teacher ID: <b>{teacherId}</b>
      </p>
      <Link className="btn mt-2" to={projectId.toString()}>
        View Project
      </Link>
    </div>
  );
};

export default Project;
