import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  return res.status(404).json({
    message: error.message,
  });
});

const server = http.createServer(app);
const port: number | string = process.env.PORT || 6060;

server.listen(port, () => console.log(`Server is running on port ${port}`));
