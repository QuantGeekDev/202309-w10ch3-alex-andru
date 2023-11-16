import chalk from "chalk";
import { type MicrogreenStructure } from "../../types";
import { type MicrogreensRepository } from "./types";
import Microgreen from "../model/Microgreen.js";

class MicrogreensMongooseRepository implements MicrogreensRepository {
  getMicrogreens = async (): Promise<MicrogreenStructure[]> => {
    try {
      const microgreens = await Microgreen.find();
      return microgreens;
    } catch (error) {
      console.log(chalk.red(`Error getting microgreens from DB:`, error));
      throw new Error("Error getting microgreens from DB");
    }
  };

  getMicrogreenById = async (id: string): Promise<MicrogreenStructure> => {
    try {
      const microgreen = await Microgreen.findById(id);
      return microgreen!;
    } catch (error) {
      console.log(chalk.red(`Error getting microgreen with id ${id} from DB`));
      throw new Error(`Error getting microgreen with id ${id} from database`);
    }
  };
}

export default MicrogreensMongooseRepository;
