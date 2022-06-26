import * as RTE from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/lib/function.js";
import { CarService } from "../services/cars/car-service";
import {
  vpicCarMakesDecoder,
  vpicCarManufacturersDecoder,
  vpicResponseDecoder,
} from "../api/vpic/codec";

export const resolveCarMakes = pipe(
  RTE.ask<CarService>(),
  RTE.chainTaskEitherK((_) => _.getMakes()),
  RTE.chainEitherKW((res) => vpicResponseDecoder.decode(res)),
  RTE.map((i) => i.Results),
  RTE.chainEitherKW((value) => vpicCarMakesDecoder.decode(value))
);

export const resolveCarManufacturers = pipe(
  RTE.ask<CarService>(),
  RTE.chainTaskEitherK((_) => _.getManufacturers()),
  RTE.chainEitherKW((res) => vpicResponseDecoder.decode(res)),
  RTE.map((i) => i.Results),
  RTE.chainEitherKW((value) => vpicCarManufacturersDecoder.decode(value))
);
