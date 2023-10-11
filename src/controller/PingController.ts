import { sendResponse } from "../services/controller";

export class PingController {
  ping() {
    return sendResponse("ping");
  }
}