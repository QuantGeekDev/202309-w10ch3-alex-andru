import { type Request, type Response } from "express";
import { type MicrogreensRepository } from "../../types";

class MicrogreensController {
  constructor(public microgreensRepository: MicrogreensRepository) {}

  public getMicrogreens = async (
    _req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const microgreens = await this.microgreensRepository.getMicrogreens();
      res.status(200).json(microgreens);
    } catch (error) {
      console.error("Error getting microgreens from database:", error);
      res
        .status(501)
        .json({ error: "Error getting microgreens from database" });
    }
  };

  public getMicrogreenById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const microgreen = await this.microgreensRepository.getMicrogreenById(id);
      res.status(200).json(microgreen);
    } catch (error) {
      console.error(
        `Error getting microgreen with id ${id} from database`,
        error,
      );

      res.status(501).json({
        error: `Error getting microgreen with id ${id} from database`,
      });
    }
  };
}

export default MicrogreensController;
