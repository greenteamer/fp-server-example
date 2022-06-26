"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const api_1 = require("../../api/vpic/api");
const safe_fetch_1 = require("../../common/utils/safe-fetch");
exports.CarService = {
    getMakes() {
        return (0, safe_fetch_1.safeAxiosGet)((0, api_1.getVpicUrl)("getAllMakes"));
    },
    getManufacturers() {
        return (0, safe_fetch_1.safeAxiosGet)((0, api_1.getVpicUrl)("getAllManufacturers"));
    },
};
//# sourceMappingURL=car-service.js.map