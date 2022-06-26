"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const car_resolvers_1 = require("./car-resolvers");
exports.resolvers = {
    vehicles: {
        makes: car_resolvers_1.resolveCarMakes,
        manufacturers: car_resolvers_1.resolveCarManufacturers,
    },
};
// type UValues = typeof resolvers[keyof typeof resolvers];
// type UKeys = keyof typeof resolvers;
// function testFun(key: UKeys) {
//   const values = resolvers[key];
// }
//# sourceMappingURL=index.js.map