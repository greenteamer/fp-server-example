import { resolveCarMakes, resolveCarManufacturers } from "./car-resolvers";

export const resolvers = {
  vehicles: {
    makes: resolveCarMakes,
    manufacturers: resolveCarManufacturers,
  },
} as const;
