// import { body, param } from "express-validator";
import { PingController } from "../controller/PingController";
import { IRouteData } from "../interfaces/route";

const baseUrl = "/ping";
const controler = new PingController();

const routes: IRouteData[] = [
  {
    action: controler.ping,
    method: "get",
    route: baseUrl,
  },
];

export default routes;