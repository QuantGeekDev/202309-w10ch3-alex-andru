import { type Request, type Response } from "express";

class MicrogreensController {
  public getMicrogreens(req: Request, res: Response) {
    const microgreens = ["Test", "Test2"];
    res.status(200).json(microgreens);
  }
}

export default MicrogreensController;
