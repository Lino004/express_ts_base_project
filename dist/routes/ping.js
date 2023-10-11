"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { body, param } from "express-validator";
const PingController_1 = require("../controller/PingController");
const baseUrl = "/ping";
const controler = new PingController_1.PingController();
const routes = [
    {
        action: controler.ping,
        method: "get",
        route: baseUrl,
    },
];
exports.default = routes;
//# sourceMappingURL=ping.js.map