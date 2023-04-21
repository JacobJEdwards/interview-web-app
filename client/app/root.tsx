import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import type { PropsWithChildren } from "react";

import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import tailwindURL from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindURL }];
};

export const meta: V2_MetaFunction = () => {
  return [{ description: "Interview Web App" }];
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

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Layout title="Oops!">
        <main className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
          <p className="text-gray-700">Something went wrong</p>
          <pre className="text-sm text-gray-500">{error.message}</pre>
        </main>
      </Layout>
    );
  }

  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Layout title="Oops!">
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
        <p className="text-gray-700">{errorMessage}</p>
      </main>
    </Layout>
  );
}
