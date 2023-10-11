"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const controller_1 = require("../services/controller");
class PingController {
    constructor() { }
    async ping() {
        return (0, controller_1.sendResponse)("ping");
    }
}
exports.PingController = PingController;
//# sourceMappingURL=PingController.js.map