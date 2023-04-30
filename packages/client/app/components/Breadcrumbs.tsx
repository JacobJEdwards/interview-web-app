import { Link } from "@remix-run/react";
import { FC, memo } from "react";

export interface RouteData {
  name: string;
  url: string;
}

interface Props {
  crumbs: RouteData[];
}

const Breadcrumbs: FC<Props> = ({ crumbs }) => {
  return (
    <div className="breadcrumbs text-sm mb-4">
      <ul>
        {crumbs.map((crumb: RouteData, index: number) => (
          <li key={index}>
            <Link
              className={
                index === crumbs.length - 1
                  ? "opacity-80 hover:opacity-90 font-semibold"
                  : "opacity-60 hover:opacity-90 font-light"
              }
              to={crumb.url}
            >
              {crumb.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Breadcrumbs);
