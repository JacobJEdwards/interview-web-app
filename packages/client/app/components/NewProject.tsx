import { Form } from "@remix-run/react";
import React from "react";
import type { ActionArgs } from "@remix-run/node";


export default function NewProject() {
    return (
        <Form method="post" action="/api/projects">
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" />
            <label htmlFor="description">Project Description</label>
            <input type="text" name="description" />
            <button type="submit">Create Project</button>
        </Form>
    );
}
