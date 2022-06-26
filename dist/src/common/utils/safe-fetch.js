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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeAxiosGet = void 0;
const TE = __importStar(require("fp-ts/TaskEither"));
const axios_1 = __importDefault(require("axios"));
const CHError_1 = require("../errors/CHError");
const safeAxiosGet = (url, config) => TE.tryCatch(() => axios_1.default.get(url, config), (error) => {
    return error instanceof Error
        ? CHError_1.CHError.of("fetchCarTypesFn", error)
        : CHError_1.CHError.of("fetchCarTypesFn", new Error("fetchCarTypesFn unknown Error"));
});
exports.safeAxiosGet = safeAxiosGet;
//# sourceMappingURL=safe-fetch.js.map