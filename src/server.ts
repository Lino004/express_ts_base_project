import express, { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import { validationResult } from "express-validator";
import config from './config';
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
const { server } = config;

routes.forEach(route => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (app as any)[route.method](route.route,
    ...route?.validation || [],
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const result = await route.action(req, res);
        res.json(result);
      } catch(err) {
        next(err);
      }
    });
});

app.listen(server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${server.hostname}: ${server.port}`);
});