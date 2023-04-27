import { Link } from "@remix-run/react";

export interface RouteData {
    name: string;
    url: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: RouteData[] }) {
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
}
