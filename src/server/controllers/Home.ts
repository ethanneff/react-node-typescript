import { Response, Request } from "express";

export const getHome = (_: Request, res: Response) => {
  res.send("Welcome home!");
};
