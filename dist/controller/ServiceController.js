"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const controller_1 = require("../services/controller");
class ServiceController {
    constructor() { }
    async one() {
        return (0, controller_1.sendResponse)("service");
    }
}
exports.ServiceController = ServiceController;
//# sourceMappingURL=ServiceController.js.map