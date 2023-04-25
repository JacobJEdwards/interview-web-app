import React from "react";
import type { FC } from "react";
import type { Module } from "server/types/generated/client";
import { Link } from "@remix-run/react";
import type { Role } from "server/types/generated/client";
import type { UserInfo } from "~/utils/user.service";

interface ModuleProps {
    id: number;
    name: string;
}

const Module: FC<ModuleProps> = ({ id, name }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Link to={id.toString()}>View Module</Link>
        </div>
    );
};

export default Module;
