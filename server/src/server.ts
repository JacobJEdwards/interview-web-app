import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./routes";

// express app initialization
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", routes);

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
const server = http.createServer(app);
const port: number | string = process.env.PORT || 6060;

server.listen(port, () => console.log(`Server is running on port ${port}`));
