"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVpicUrl = exports.ENDPOINTS = void 0;
const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";
var ENDPOINTS;
(function (ENDPOINTS) {
    ENDPOINTS["getAllMakes"] = "GetAllMakes";
    ENDPOINTS["getAllManufacturers"] = "GetAllManufacturers";
})(ENDPOINTS = exports.ENDPOINTS || (exports.ENDPOINTS = {}));
const getVpicUrl = (endpoint, format = "json") => `${BASE_URL}/${ENDPOINTS[endpoint]}?format=${format}`;
exports.getVpicUrl = getVpicUrl;
//# sourceMappingURL=api.js.map