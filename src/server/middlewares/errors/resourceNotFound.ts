import { type NextFunction, type Request, type Response } from "express";

const resourceNotFound = (_req: Request, res: Response): void => {
  res.status(404).send("Resource not found");
};

export default resourceNotFound;
