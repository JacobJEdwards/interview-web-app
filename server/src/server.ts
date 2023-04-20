import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import routes from './routes/index'

const router: Express = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/api", routes);

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  return res.status(404).json({
    message: error.message,
  });
});

const server = http.createServer(router);
const port: number | string = process.env.PORT || 6060;

server.listen(port, () => console.log(`Server is running on port ${port}`));
