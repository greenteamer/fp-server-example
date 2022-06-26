import * as D from "io-ts/Decoder";
import { CarMake, CarManufacturers } from "./types";
export declare const vpicResponseDecoder: D.Decoder<unknown, {
    Count: number;
    Message: string;
    Results: unknown;
}>;
export declare const vpicCarMakesDecoder: D.Decoder<unknown, CarMake[]>;
export declare const vpicCarManufacturersDecoder: D.Decoder<unknown, CarManufacturers[]>;
//# sourceMappingURL=codec.d.ts.map