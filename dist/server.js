"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const express_validator_1 = require("express-validator");
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
// function handleError(err, _req, res, _next) {
//   res.status(err.statusCode || 500).send(err.message)
// }
const app = (0, express_1.default)();
app.use(bodyParser.json());
const { server } = config_1.default;
routes_1.default.forEach(route => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app[route.method](route.route, ...route?.validation || [], async (req, res, next) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await route.action(req, res);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    });
});
// app.use(handleError);
app.listen(server.port, () => {
    console.log(`Server running on ${server.hostname}: ${server.port}`);
});
//# sourceMappingURL=server.js.map