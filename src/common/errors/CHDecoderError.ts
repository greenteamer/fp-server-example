import * as D from "io-ts/Decoder";

export class CHDecoderError {
  readonly _tag = "CHDecoderError";
  readonly error: D.DecodeError;
  readonly message: string;
  private constructor(marker: string, error: D.DecodeError) {
    this.error = error;
    this.message = `${marker} \n${D.draw(error)}`;
  }

  static of(marker: string, error: D.DecodeError) {
    return new CHDecoderError(marker, error);
  }
}
