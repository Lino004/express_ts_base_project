"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceController_1 = require("../controller/ServiceController");
const baseUrl = "/service";
const controler = new ServiceController_1.ServiceController();
const routes = [
    {
        action: controler.one,
        method: "get",
        route: baseUrl,
    },
];
exports.default = routes;
//# sourceMappingURL=service.js.map