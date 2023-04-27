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
            <Link to={crumb.url}>{crumb.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Breadcrumbs);
