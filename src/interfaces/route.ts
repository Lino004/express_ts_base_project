import { Request, Response } from "express";
import { ValidationChain } from "express-validator";

export interface IResponseData<T> {
  data: T,
}

export interface IRouteData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (req: Request, res: Response) => Promise<IResponseData<any>> | IResponseData<any>,
  method: string,
  route: string,
  validation?: ValidationChain[],
}
