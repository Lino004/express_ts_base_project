import { sendResponse } from "../services/controller";

export class ServiceController {
  one() {
    return sendResponse("service");
  }
}