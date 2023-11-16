import { Schema, model } from "mongoose";
import { type MicrogreenStructure } from "../../types";

const microgreenSchema = new Schema<MicrogreenStructure>({
  name: { type: String, required: true },
  seed_type: { type: String, required: true },
  seed_quantity: { type: Number, required: true },
  total_light_days: { type: Number, required: true },
  approx_yield: { type: Number, required: true },
  blackout_time_days: { type: Number, required: true },
  harvest_time_days: { type: Number, required: true },
  germination_time_days: { type: Number, required: true },
  daily_light_integral: { type: Number, required: true },
});

const Microgreen = model("Microgreen", microgreenSchema, "microgreens");

export default Microgreen;
