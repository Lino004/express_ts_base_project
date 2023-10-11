import { IResponseData } from "../interfaces/route";

export function sendResponse<T>(val: T): IResponseData<T> {
  return { data: val };
}
