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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("fp-ts/lib/function");
const RTE = __importStar(require("fp-ts/ReaderTaskEither"));
const E = __importStar(require("fp-ts/Either"));
const O = __importStar(require("fp-ts/Option"));
const http = __importStar(require("http"));
const request_urls_codec_1 = require("./common/codecs/request-urls-codec");
const CHError_1 = require("./common/errors/CHError");
const map_decoder_error_1 = require("./common/utils/map-decoder-error");
const resolvers_1 = require("./resolvers");
const car_service_1 = require("./services/cars/car-service");
const hostname = "127.0.0.1";
const port = 3000;
http
    .createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, function_1.pipe)(req, (req) => {
        return req.url;
    }, O.fromNullable, E.fromOption(() => CHError_1.CHError.of("[server]", new Error("Url should not be a null."))), E.chainW((url) => {
        // const t = url.split("/")[1];
        return E.right(url);
    }), E.chainW((urlString) => {
        // const url = new URL(`http://${req.headers.host}${req.url}`);
        return (0, map_decoder_error_1.mapDecoderError)("server")(request_urls_codec_1.vehiclesUrlDecoder.decode(urlString));
    }), RTE.fromEither, RTE.chainW((url) => {
        console.log("url: ", url);
        switch (url) {
            case "/api/vehicles/makes":
                return resolvers_1.resolvers.vehicles.makes;
            case "/api/vehicles/manufacturers":
                return resolvers_1.resolvers.vehicles.manufacturers;
        }
    }), RTE.match((error) => {
        console.log(error);
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(error));
    }, (data) => {
        console.log(data);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }), (passDeps) => passDeps(car_service_1.CarService), (invoke) => invoke());
}))
    .listen(port, hostname, () => {
    console.log(`Server running now at http://${hostname}:${port}`);
});
//# sourceMappingURL=server.js.map