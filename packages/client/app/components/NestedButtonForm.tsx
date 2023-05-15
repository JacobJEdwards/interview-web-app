import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Form } from '@remix-run/react';

type Props = PropsWithChildren<{
    formValue: string;
    disabled?: boolean;
}>;

const NestedButtonForm: FC<Props> = ({ formValue, disabled = false, children }) => {
    return (
        <Form method="post" reloadDocument>
            <input type="hidden" name="action" value={formValue} />
            <button type="submit" className="btn" disabled={disabled}>
                {children}
            </button>
        </Form>
    );
}

export default NestedButtonForm;
