import * as D from "io-ts/Decoder";
import * as E from "fp-ts/Either";
import { CHDecoderError } from "../errors/CHDecoderError";
export declare const mapDecoderError: (marker: string) => <T>(either: E.Either<D.DecodeError, T>) => E.Either<CHDecoderError, T>;
//# sourceMappingURL=map-decoder-error.d.ts.map