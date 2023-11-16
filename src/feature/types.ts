export interface Microgreen {
  name: string;
  seed_type: string;
  seed_quantity: number;
  total_light_days: number;
  approx_yield: number;
  blackout_time_days: number;
  harvest_time_days: 10;
  germination_time_days: 3;
  daily_light_integral: 12;
}
