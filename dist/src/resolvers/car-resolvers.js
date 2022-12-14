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
exports.resolveCarManufacturers = exports.resolveCarMakes = void 0;
const RTE = __importStar(require("fp-ts/ReaderTaskEither"));
const function_js_1 = require("fp-ts/lib/function.js");
const codec_1 = require("../api/vpic/codec");
const map_decoder_error_1 = require("../common/utils/map-decoder-error");
exports.resolveCarMakes = (0, function_js_1.pipe)(RTE.ask(), RTE.chainTaskEitherK((_) => _.getMakes()), RTE.chainEitherKW((res) => {
    return (0, map_decoder_error_1.mapDecoderError)("[makes response]")(codec_1.vpicResponseDecoder.decode(res.data));
}), RTE.chainEitherKW((value) => (0, map_decoder_error_1.mapDecoderError)("[makes result]")(codec_1.vpicCarMakesDecoder.decode(value.Results))));
exports.resolveCarManufacturers = (0, function_js_1.pipe)(RTE.ask(), RTE.chainTaskEitherK((_) => _.getManufacturers()), RTE.chainEitherKW((res) => (0, map_decoder_error_1.mapDecoderError)("[manufacturers response]")(codec_1.vpicResponseDecoder.decode(res.data))), RTE.chainEitherKW((value) => (0, map_decoder_error_1.mapDecoderError)("[manufacturers result]")(codec_1.vpicCarManufacturersDecoder.decode(value.Results))));
//# sourceMappingURL=car-resolvers.js.map