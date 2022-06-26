import { pipe } from "fp-ts/lib/function";
import * as D from "io-ts/Decoder";
import * as E from "fp-ts/Either";
import { CHDecoderError } from "../errors/CHDecoderError";

export const mapDecoderError =
  (marker: string) =>
  <T>(either: E.Either<D.DecodeError, T>) =>
    pipe(
      either,
      E.mapLeft((error) => CHDecoderError.of(marker, error))
    );
