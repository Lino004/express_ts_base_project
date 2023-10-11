import { ILoggingObject } from "../interfaces/config";

const getTimeStamp = () => {
  return new Date().toISOString();
};

export const info = (namespace: string, message: string, object: ILoggingObject) => {
  if (object) {
    // eslint-disable-next-line no-console
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
  } else {
    // eslint-disable-next-line no-console
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

export const warn = (namespace: string, message: string, object: ILoggingObject) => {
  if (object) {
    // eslint-disable-next-line no-console
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
  } else {
    // eslint-disable-next-line no-console
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

export const error = (namespace: string, message: string, object: ILoggingObject) => {
  if (object) {
    // eslint-disable-next-line no-console
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
  } else {
    // eslint-disable-next-line no-console
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

export const debug = (namespace: string, message: string, object: ILoggingObject) => {
  if (object) {
    // eslint-disable-next-line no-console
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  } else {
    // eslint-disable-next-line no-console
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

