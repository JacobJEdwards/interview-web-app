import React, { memo } from "react";
import { Link } from "@remix-run/react";
import Module from "./Module";
import type { FC } from "react";
import type { Module as ModuleType } from "server/types/generated/client";

const Sidebar: FC<{ modules: ModuleType[] | null }> = ({ modules }) => {
  return (
    <nav className="bg-base-200 pt-10 h-full">
      <ul className="p-4 w-55 text-base-content">
        <li className="mb-4">
          <Link className="text-center border border-slate-700" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <div className="divider"></div>
        {modules &&
          modules.map((module: ModuleType) => (
            <li key={module.id} className="mb-4">
              <Module {...module} />
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default memo(Sidebar);
