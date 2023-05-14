import { middleware, errorHandler } from "./middleware";

import App, { type AppOptions } from "./application";

import APIRoutes from "./routes/api.router";
import AuthRoutes from "./routes/auth.router";

const port: number | string = process.env.PORT || 6060;

const options = {
    port,
    middleware,
    apiRoutes: [APIRoutes],
    authRoutes: [AuthRoutes],
    otherRoutes: errorHandler,
};

const app = new App(options as AppOptions);

app.listen();
