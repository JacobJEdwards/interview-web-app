import type { Application, RequestHandler, ErrorRequestHandler } from "express";
import express, { Router } from "express";
import { createServer, Server } from "http";
import { validateToken } from "./middleware";

type Middleware = RequestHandler | ErrorRequestHandler;

export interface AppOptions {
    port: number | string;
    middleware: Middleware[];
    apiRoutes: Array<Router>;
    authRoutes: Array<Router>;
    otherRoutes: Middleware[];
    apiPath?: string;
    authPath?: string;
}

export default class App {
    public app: Application;
    public authPath: string;
    public apiPath: string;
    private port: number | string;

    constructor(options: AppOptions) {
        this.app = express();
        this.port = this.normalizePort(options.port) as number;
        this.app.set("port", this.port);

        this.apiPath = options.apiPath || "/api";
        this.authPath = options.authPath || "/auth";

        this.middlewares(options.middleware);

        this.apiRoutes(options.apiRoutes);
        this.authRoutes(options.authRoutes);

        this.otherRoutes(options.otherRoutes);
    }

    private middlewares(middleware: Middleware[]) {
        middleware.forEach((m) => {
            this.app.use(m);
        });
    }

    public addMiddleware(middleware: Middleware) {
        this.app.use(middleware);
    }

    private apiRoutes(routes: Array<Router>) {
        routes.forEach((r) => {
            this.app.use(this.apiPath, validateToken, r);
        });
    }

    private authRoutes(routes: Array<Router>) {
        routes.forEach((r) => {
            this.app.use(this.authPath, r);
        });
    }

    private otherRoutes(routes: Middleware[]) {
        routes.forEach((r) => {
            this.app.use(r);
        });
    }

    public listen() {
        const server: Server = createServer(this.app);
        server.listen(this.port);

        server.on("error", this.onError);
        server.on("listening", () => this.onListening(server));
    }

    private onListening(server: Server): void {
        const addr = server.address();
        if (!addr) return;
        const bind =
            typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
        console.log("Listening on " + bind);
    }

    private onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== "listen") {
            throw error;
        }

        const bind =
            typeof this.port === "string" ? "Pipe " + this.port : "Port " + this.port;

        // handle specific listeners
        switch (error.code) {
            case "EACCES":
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private normalizePort(val: unknown): string | number | false {
        if (typeof val === "number") {
            return val;
        }

        const port = parseInt(val as string, 10);

        if (!isNaN(port)) {
            // named pipe
            return port;
        }

        return false;
    }
}
