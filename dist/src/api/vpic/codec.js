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
exports.vpicCarManufacturersDecoder = exports.vpicCarMakesDecoder = exports.vpicResponseDecoder = void 0;
const D = __importStar(require("io-ts/Decoder"));
exports.vpicResponseDecoder = D.struct({
    Count: D.number,
    Message: D.string,
    Results: D.UnknownRecord,
});
exports.vpicCarMakesDecoder = D.array(D.struct({
    Make_ID: D.number,
    Make_Name: D.string,
}));
exports.vpicCarManufacturersDecoder = D.array(D.struct({
    Country: D.string,
    Mfr_CommonName: D.nullable(D.string),
    Mfr_ID: D.number,
    Mfr_Name: D.string,
}));
//# sourceMappingURL=codec.js.map