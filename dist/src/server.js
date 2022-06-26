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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { pipe } from "fp-ts/lib/function";
// import * as RTE from "fp-ts/ReaderTaskEither";
// import * as E from "fp-ts/Either";
// import * as O from "fp-ts/Option";
const http = __importStar(require("http"));
// import {
//   VehiclesUrlDecoder,
//   vehiclesUrlDecoder,
// } from "./common/codecs/request-urls-codec";
// import { CHError } from "./common/errors/CHError";
// import { mapDecoderError } from "./common/utils/map-decoder-error";
// import { resolvers } from "./resolvers";
// import { CarService } from "./services/cars/car-service";
// import { CHDecoderError } from "./common/errors/CHDecoderError";
// import { CarMake, CarManufacturers } from "./api/vpic/types";
// import { CHNetworkError } from "./common/errors/CHNetworkError";
const api_1 = require("./api/vpic/api");
const axios_1 = __importDefault(require("axios"));
const hostname = "127.0.0.1";
const port = 3000;
// type CombinedError = CHNetworkError | CHDecoderError;
// type CombinedData = CarMake[] | CarManufacturers[];
http
    .createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { url } = req;
    if (url) {
        if (url === "/api/vehicles/makes") {
            const fetchUrl = (0, api_1.getVpicUrl)("getAllMakes");
            const result = (yield axios_1.default.get(fetchUrl));
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.Results));
        }
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end("BAD!!!!");
    }
}))
    .listen(port, hostname, () => {
    console.log(`Server running now at http://${hostname}:${port}`);
});
// http
//   .createServer((req, res) => {
//     pipe(
//       req,
//       (req) => {
//         return req.url;
//       },
//       O.fromNullable,
//       E.fromOption(() =>
//         CHError.of("[server]", new Error("Url should not be a null."))
//       ),
//       E.chainW((url) => {
//         // const t = url.split("/")[1];
//         return E.right(url);
//       }),
//       E.chainW((urlString) => {
//         // const url = new URL(`http://${req.headers.host}${req.url}`);
//         return mapDecoderError("server")(vehiclesUrlDecoder.decode(urlString));
//       }),
//       RTE.fromEither,
//       RTE.chainW<CarService, CombinedError, VehiclesUrlDecoder, CombinedData>(
//         (url) => {
//           switch (url) {
//             case "/api/vehicles/makes":
//               return resolvers.vehicles.makes;
//             case "/api/vehicles/manufacturers":
//               return resolvers.vehicles.manufacturers;
//           }
//         }
//       ),
//       RTE.match(
//         (error) => {
//           res.statusCode = 500;
//           res.setHeader("Content-Type", "application/json");
//           res.end(JSON.stringify(error));
//         },
//         (data) => {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.end(JSON.stringify(data));
//         }
//       ),
//       (passDeps) => passDeps(CarService),
//       (invoke) => invoke()
//     );
//   })
//   .listen(port, hostname, () => {
//     console.log(`Server running now at http://${hostname}:${port}`);
//   });
//# sourceMappingURL=server.js.map