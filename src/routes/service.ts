import { ServiceController } from "../controller/ServiceController";
import { IRouteData } from "../interfaces/route";

const baseUrl = "/service";
const controler = new ServiceController();

const routes: IRouteData[] = [
  {
    action: controler.one,
    method: "get",
    route: baseUrl,
  },
];

export default routes;