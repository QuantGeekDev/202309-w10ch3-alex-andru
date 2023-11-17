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
      return microgreen as MicrogreenStructure;
    } catch (error) {
      console.log(chalk.red(`Error getting microgreen with id ${id} from DB`));
      throw new Error(`Error getting microgreen with id ${id} from database`);
    }
  };

  addMicrogreen = async (
    microgreen: MicrogreenStructure,
  ): Promise<MicrogreenStructure> => {
    try {
      const response = await Microgreen.create(microgreen);
      return response;
    } catch (error) {
      console.log(chalk.red(`Error adding ${microgreen.name} to database`));
      throw new Error(`Error adding ${microgreen.name} to database`);
    }
  };
}

export default MicrogreensMongooseRepository;
