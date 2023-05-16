import { type FC, memo } from "react";
import { Link } from "@remix-run/react";
import type { Project as ProjectType } from "server/types/generated/client";

type ProjectProps = Omit<ProjectType, "dateDue" | "dateSet"> & {
  dateDue: Date | string;
  dateSet: Date | string;
  dateDueString: string;
  dateSetString?: string;
  disabled?: boolean;
};

const Project: FC<ProjectProps> = ({
  name,
  description,
  id,
  dateDueString,
  disabled,
}) => {
  if (description.length > 100) description = description.slice(0, 100) + "...";

  return (
    <div className="flex flex-col max-w-none w-full my-5">
      <div className="flex flex-row max-w-none w-full my-3">
        <div className="flex flex-col prose max-w-none">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>{description}</p>
        </div>
        <p className="mt-1 mr-2 ml-auto">{dateDueString}</p>
      </div>
      <Link
        className={disabled ? "btn btn-disabled mt-5" : "btn mt-5"}
        to={id.toString()}
        prefetch="intent"
      >
        View Project
      </Link>
    </div>
  );
};

export default memo(Project);
