import * as RTE from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/lib/function.js";
import { CarService } from "../services/cars/car-service";
import {
  vpicCarMakesDecoder,
  vpicCarManufacturersDecoder,
  vpicResponseDecoder,
} from "../api/vpic/codec";
import { mapDecoderError } from "../common/utils/map-decoder-error";

export const resolveCarMakes = pipe(
  RTE.ask<CarService>(),
  RTE.chainTaskEitherK((_) => _.getMakes()),
  RTE.chainEitherKW((res) => {
    return mapDecoderError("[makes response]")(
      vpicResponseDecoder.decode(res.data)
    );
  }),
  RTE.chainEitherKW((value) =>
    mapDecoderError("[makes result]")(vpicCarMakesDecoder.decode(value.Results))
  )
);

export const resolveCarManufacturers = pipe(
  RTE.ask<CarService>(),
  RTE.chainTaskEitherK((_) => _.getManufacturers()),
  RTE.chainEitherKW((res) =>
    mapDecoderError("[manufacturers response]")(
      vpicResponseDecoder.decode(res.data)
    )
  ),
  RTE.chainEitherKW((value) =>
    mapDecoderError("[manufacturers result]")(
      vpicCarManufacturersDecoder.decode(value.Results)
    )
  )
);
