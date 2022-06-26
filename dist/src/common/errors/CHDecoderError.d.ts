import * as D from "io-ts/Decoder";
export declare class CHDecoderError {
    readonly _tag = "CHDecoderError";
    readonly error: D.DecodeError;
    readonly message: string;
    private constructor();
    static of(marker: string, error: D.DecodeError): CHDecoderError;
}
//# sourceMappingURL=CHDecoderError.d.ts.map