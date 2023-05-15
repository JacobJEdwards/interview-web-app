import React, { type FC, useState } from "react";
import type { PropsWithChildren } from "react";
import Popup from "./Popup";
import NestedButtonForm from './NestedButtonForm'


type ButtonFormProps = {
    formAction: string;
    children: React.ReactNode;
    requireConfirmation?: boolean;
    disabled?: boolean;
    confirmMessage?: string;
};

const ButtonForm: FC<PropsWithChildren<ButtonFormProps>> = ({
    formAction,
    requireConfirmation = false,
    disabled = false,
    children,
    confirmMessage = "Are you sure?",
}) => {
    const [confirming, setConfirming] = useState(false);

    return (
        <>
            {requireConfirmation ? (
                <>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => setConfirming(true)}
                    >
                        {children}
                    </button>
                    {confirming && (
                        <Popup formValue={formAction} onClick={() => setConfirming(false)}>
                            {confirmMessage}
                        </Popup>
                    )}
                </>
            ) : (
                <NestedButtonForm formValue={formAction} disabled={disabled}>
                    {children}
                </NestedButtonForm>
            )}
        </>
    );
};

export default ButtonForm;
