import { type Request, type Response } from "express";
import { type MicrogreensRepository } from "../../types";

class MicrogreensController {
  constructor(public microgreensRepository: MicrogreensRepository) {}

  public getMicrogreens = async (
    _req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const microgreens = await this.microgreensRepository
        .getMicrogreens()
        .then();
      res.status(200).json(microgreens);
    } catch (error) {
      console.error("Error getting microgreens from DB:", error);
      res
        .status(501)
        .json({ error: "Error getting Microgreens from Database" });
    }
  };
}

export default MicrogreensController;
