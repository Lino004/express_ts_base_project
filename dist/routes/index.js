"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = __importDefault(require("./ping"));
const service_1 = __importDefault(require("./service"));
exports.default = [
    ...ping_1.default,
    ...service_1.default,
];
//# sourceMappingURL=index.js.map