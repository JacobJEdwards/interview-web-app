import { Form } from "@remix-run/react";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import NestedButtonForm from "./NestedButtonForm";

type PopupProps = PropsWithChildren<{
    onClick: () => void;
    formValue?: string;
    isOpen?: boolean;
}>;

const Popup: FC<PopupProps> = ({
    onClick,
    formValue = "",
    isOpen = true,
    children,
}) => {
    return (
        <div className="alert shadow-lg w-1/2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-blur-xl">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>{children}</span>
            </div>
            <div className="flex-none">
                <button className="btn btn-sm btn-ghost" onClick={onClick}>
                    Cancel
                </button>
                <NestedButtonForm formValue={formValue}>Confirm</NestedButtonForm>
            </div>
        </div>
    );
};

export default Popup;
