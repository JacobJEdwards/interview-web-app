import React, { memo } from "react";
import type { FC } from "react";
import type { Module as ModuleType } from "server/types/generated/client";
import { Link } from "@remix-run/react";
import type { Role } from "server/types/generated/client";
import type { UserInfo } from "~/utils/user.service";

const Module: FC<ModuleType> = ({ id, name }) => {
  return (
    <Link
      to={`/dashboard/${id}`}
      className="flex flex-col justify-center align-center"
    >
      {name}
    </Link>
  );
};

export default memo(Module);
