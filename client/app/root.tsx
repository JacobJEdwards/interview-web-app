import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import { PropsWithChildren } from "react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: "./styles/app.css" }];
};

export const meta: MetaFunction = () => {
    return {
        description: "Interview Web App",
    };
};

const Layout = ({
    children,
    title = "Interview Web App",
}: PropsWithChildren<{ title?: string }>) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
            <title>{title}</title>
        </head>
        <body>
            {children}
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
        </body>
    </html>
);

export default function App() {
    return (
        <Layout title="Home">
            <Outlet />
        </Layout>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    return (
        <Layout title="Oops!">
            <h1>Oops!</h1>
            <pre>{error.message}</pre>
        </Layout>
    );
}
