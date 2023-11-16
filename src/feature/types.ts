export interface MicrogreenStructure {
  name: string;
  seed_type: string;
  seed_quantity: number;
  total_light_days: number;
  approx_yield: number;
  blackout_time_days: number;
  harvest_time_days: number;
  germination_time_days: number;
  daily_light_integral: number;
}
