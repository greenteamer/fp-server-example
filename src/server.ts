// import { pipe } from "fp-ts/lib/function";
// import * as RTE from "fp-ts/ReaderTaskEither";
// import * as E from "fp-ts/Either";
// import * as O from "fp-ts/Option";
import * as http from "http";
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
import { getVpicUrl } from "./api/vpic/api";
import axios, { AxiosResponse } from "axios";

const hostname = "127.0.0.1";
const port = 3000;

// type CombinedError = CHNetworkError | CHDecoderError;
// type CombinedData = CarMake[] | CarManufacturers[];

http
  .createServer(async (req, res) => {
    const { url } = req;
    if (url) {
      if (url === "/api/vehicles/makes") {
        const fetchUrl = getVpicUrl("getAllMakes");
        const result = (await axios.get<unknown, AxiosResponse<unknown>>(
          fetchUrl
        )) as any;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(result?.data?.Results));
      }
    } else {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end("BAD!!!!");
    }
  })
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
