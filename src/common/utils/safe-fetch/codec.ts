import { AxiosResponse } from "axios";
import * as D from "io-ts/Decoder";

export const axiosResponseDecoder = D.struct<AxiosResponse<unknown>>({
  status: D.number,
  statusText: D.string,
  headers: D.struct({}),
  config: D.struct({}),
  data: D.UnknownRecord,
});

export type AxiosResponseDecoder = D.TypeOf<typeof axiosResponseDecoder>;
