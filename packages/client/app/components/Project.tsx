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
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Teacher ID: {teacherId}</p>
      <Link to={projectId.toString()}>View Project</Link>
    </div>
  );
};

export default Project;
