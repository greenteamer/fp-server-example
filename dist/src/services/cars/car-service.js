"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const TE = __importStar(require("fp-ts/TaskEither"));
const api_1 = require("../../api/vpic/api");
const safe_fetch_1 = require("../../common/utils/safe-fetch/safe-fetch");
const function_1 = require("fp-ts/lib/function");
const map_decoder_error_1 = require("../../common/utils/map-decoder-error");
const codec_1 = require("../../common/utils/safe-fetch/codec");
exports.CarService = {
    getMakes() {
        return (0, function_1.pipe)((0, safe_fetch_1.safeAxiosGet)((0, api_1.getVpicUrl)("getAllMakes")), TE.chainEitherKW((i) => (0, function_1.pipe)(codec_1.axiosResponseDecoder.decode(i), (0, map_decoder_error_1.mapDecoderError)("[getAllMakes]"))));
    },
    getManufacturers() {
        return (0, function_1.pipe)((0, safe_fetch_1.safeAxiosGet)((0, api_1.getVpicUrl)("getAllManufacturers")), TE.chainEitherKW((i) => (0, function_1.pipe)(codec_1.axiosResponseDecoder.decode(i), (0, map_decoder_error_1.mapDecoderError)("[getAllMakes]"))));
    },
};
//# sourceMappingURL=car-service.js.map