import chalk from "chalk";
import {
  type MicrogreenStructure,
  type MicrogreensRepository,
} from "../../types";

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
}

export default MicrogreensMongooseRepository;
