import * as D from "io-ts/Decoder";
import { CarMake, CarManufacturers, VpicResponse } from "./types";

export const vpicResponseDecoder = D.struct<VpicResponse<unknown>>({
  Count: D.number,
  Message: D.string,
  Results: D.UnknownRecord,
});

export const vpicCarMakesDecoder = D.array<CarMake>(
  D.struct({
    Make_ID: D.number,
    Make_Name: D.string,
  })
);

export const vpicCarManufacturersDecoder = D.array<CarManufacturers>(
  D.struct({
    Country: D.string,
    Mfr_CommonName: D.nullable(D.string),
    Mfr_ID: D.number,
    Mfr_Name: D.string,
  })
);
