import { type MicrogreenStructure } from "../../types";

export const microgreens: MicrogreenStructure[] = [
  {
    name: "Radish Micros",
    approx_yield: 280,
    blackout_time_days: 3,
    daily_light_integral: 12,
    germination_time_days: 3,
    harvest_time_days: 10,

    seed_quantity: 28,
    seed_type: "Radish Seeds",
    total_light_days: 4,
  },
  {
    name: "Broccoli Microgreens",
    approx_yield: 280,
    blackout_time_days: 3,
    daily_light_integral: 12,
    germination_time_days: 2,
    harvest_time_days: 10,

    seed_quantity: 28,
    seed_type: "Broccoli Seeds",
    total_light_days: 5,
  },
];
