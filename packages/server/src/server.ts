import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

import normalizePort from "./utils/normalizePort";
import APIRoutes from "./routes/api.router";
import AuthRoutes from "./routes/auth.router";

dotenv.config();

// express app initialization
const app: Express = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan("dev"));

app.disable("x-powered-by");

// routes
app.use("/api", APIRoutes);
app.use("/auth", AuthRoutes);

// error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    message: err.message,
  });
});

// 404 error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  return res.status(404).json({ message: error.message });
});

// server initialization
const port = normalizePort(process.env.PORT || 6060) as number;
if (!port) throw new Error("Port is not defined");

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// https://github.com/ferreiro/example-monorepo/blob/master/packages/server/bin/www#L15
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific liseners
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

function onListening() {
  const addr = server.address();
  if (!addr) return;
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
