import type { Module } from "server/types/generated/client";
import { Link } from "@remix-run/react";
import type { FC } from "react";

interface SidebarProps {
  modules: Module[];
}

const Sidebar: FC<SidebarProps> = ({ modules }) => {
  return (
    <aside className="h-screen sticky top-0 left-0">
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <Link to={`/dashboard/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
