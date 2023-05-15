import { type FC, memo } from "react";
import { Link } from "@remix-run/react";
import type { Project as ProjectType } from "server/types/generated/client";

type ProjectProps = Omit<ProjectType, "dateDue" | "dateSet"> & {
  dateDue: string | Date;
  dateSet: string | Date;
  disabled?: boolean;
};

const Project: FC<ProjectProps> = ({
  name,
  description,
  id,
  dateDue,
  disabled,
}) => {
  return (
    <div className="flex flex-row max-w-none w-full mt-5">
      <div className="flex flex-col prose max-w-none">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{description}</p>
        <Link
          className={disabled ? "btn btn-disabled mt-2" : "btn mt-2"}
          to={id.toString()}
          prefetch="intent"
        >
          View Project
        </Link>
      </div>
      <p className="ml-auto">{new Date(dateDue).toLocaleString()}</p>
    </div>
  );
};

export default memo(Project);
