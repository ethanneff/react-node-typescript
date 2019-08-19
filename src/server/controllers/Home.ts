import { Response, Request } from "express";

export const getHome = (req: Request, res: Response) => {
  res.send("Welcome home!");
};
