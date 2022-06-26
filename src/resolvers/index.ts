import { resolveCarMakes, resolveCarManufacturers } from "./car-resolvers";

export const resolvers = {
  vehicles: {
    makes: resolveCarMakes,
    manufacturers: resolveCarManufacturers,
  },
} as const;

// type UValues = typeof resolvers[keyof typeof resolvers];
// type UKeys = keyof typeof resolvers;

// function testFun(key: UKeys) {
//   const values = resolvers[key];
// }
