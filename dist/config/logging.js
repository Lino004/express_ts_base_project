"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.error = exports.warn = exports.info = void 0;
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        // eslint-disable-next-line no-console
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else {
        // eslint-disable-next-line no-console
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};
exports.info = info;
const warn = (namespace, message, object) => {
    if (object) {
        // eslint-disable-next-line no-console
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
    else {
        // eslint-disable-next-line no-console
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};
exports.warn = warn;
const error = (namespace, message, object) => {
    if (object) {
        // eslint-disable-next-line no-console
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
    else {
        // eslint-disable-next-line no-console
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};
exports.error = error;
const debug = (namespace, message, object) => {
    if (object) {
        // eslint-disable-next-line no-console
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
    else {
        // eslint-disable-next-line no-console
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};
exports.debug = debug;
//# sourceMappingURL=logging.js.map