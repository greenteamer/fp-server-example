import * as D from "io-ts/Decoder";
export declare const axiosResponseDecoder: D.Decoder<unknown, {
    data: unknown;
    status: number;
    statusText: string;
    headers: import("axios").AxiosResponseHeaders;
    config: import("axios").AxiosRequestConfig<any>;
    request?: any;
}>;
export declare type AxiosResponseDecoder = D.TypeOf<typeof axiosResponseDecoder>;
//# sourceMappingURL=codec.d.ts.map