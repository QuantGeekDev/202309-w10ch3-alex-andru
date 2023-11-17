import { type MicrogreenStructure } from "../../types";

export interface MicrogreensRepository {
  getMicrogreens: () => Promise<MicrogreenStructure[]>;
  getMicrogreenById: (id: string) => Promise<MicrogreenStructure>;
  addMicrogreen: (
    microgreen: MicrogreenStructure,
  ) => Promise<MicrogreenStructure>;
}
