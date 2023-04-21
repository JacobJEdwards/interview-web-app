import type { V2_MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const projects = await fetch("http://localhost:6060/api/projects");
    const data = await projects.json();
    const teacherId = data[0].teacherId;
    const teacher = await fetch(
        `http://localhost:6060/api/teachers/${teacherId}`
    );
    const teacherData = await teacher.json();
    return json(teacherData);
};

export const meta: V2_MetaFunction = () => {
    return [{ title: "Home" }];
};

export default function Index() {
    const data = useLoaderData();
    console.log(data);
    return <div></div>;
}
